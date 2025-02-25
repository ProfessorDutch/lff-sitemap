import { useState, useEffect } from 'react';
import { contentfulClient } from '../lib/contentful';
import { CONTENTFUL_CONFIG } from '../config/contentful';
import type { LandingPage } from '../types/contentful';
import { handleContentfulError } from '../utils/error';

interface UseContentfulReturn {
  pages: LandingPage[];
  loading: boolean;
  error: string | null;
}

export const useContentful = (): UseContentfulReturn => {
  const [pages, setPages] = useState<LandingPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await contentfulClient.getEntries<LandingPage>({
          content_type: CONTENTFUL_CONFIG.contentTypes.landingPage,
          include: 2,
        });
        setPages(response.items as LandingPage[]);
      } catch (err) {
        const errorMessage = handleContentfulError(err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  return { pages, loading, error };
};