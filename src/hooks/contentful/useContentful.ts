import { useState, useEffect } from 'react';
import { contentfulClient } from '../../lib/contentful';
import { CONTENTFUL_CONFIG } from '../../config/contentful';
import { transformContentfulFields } from '../../utils/contentful/transformers';
import type { LandingPage } from '../../types/contentful';
import { handleContentfulError } from '../../utils/error';

interface UseContentfulReturn {
  pages: LandingPage[];
  loading: boolean;
  error: string | null;
}

export const useContentful = (slug?: string): UseContentfulReturn => {
  const [pages, setPages] = useState<LandingPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        console.log('Fetching Contentful pages:', { 
          slug,
          contentType: CONTENTFUL_CONFIG.contentTypes.landingPage,
          urlSlugField: CONTENTFUL_CONFIG.fields.urlSlug
        });
        
        const query: any = {
          content_type: CONTENTFUL_CONFIG.contentTypes.landingPage,
          include: 2,
          limit: 100,
          order: `fields.${CONTENTFUL_CONFIG.fields.city}`
        };

        // If slug is provided, filter by URL slug
        if (slug) {
          query[`fields.${CONTENTFUL_CONFIG.fields.urlSlug}`] = slug;
          console.log('Querying by slug:', query);
        }

        const response = await contentfulClient.getEntries(query);

        console.log('Contentful Response:', {
          total: response.total,
          itemCount: response.items?.length,
          firstItem: response.items?.[0] ? {
            id: response.items[0].sys.id,
            contentType: response.items[0].sys.contentType?.sys.id,
            fields: Object.keys(response.items[0].fields),
            urlSlug: response.items[0].fields[CONTENTFUL_CONFIG.fields.urlSlug],
            city: response.items[0].fields[CONTENTFUL_CONFIG.fields.city]
          } : null
        });

        if (!response.items?.length) {
          throw new Error(slug ? `Page not found: ${slug}` : 'No content found');
        }

        const transformedPages = response.items.map(entry => ({
          sys: { id: entry.sys.id },
          fields: transformContentfulFields(entry)
        }));

        console.log('Transformed pages:', transformedPages.map(page => ({
          id: page.sys.id,
          title: page.fields.pageTitle,
          city: page.fields.city,
          slug: page.fields.urlSlug
        })));
        
        setPages(transformedPages);
        setError(null);
      } catch (err) {
        console.error('Contentful Error:', err);
        setError(handleContentfulError(err));
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, [slug]);

  return { pages, loading, error };
};