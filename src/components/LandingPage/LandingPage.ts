import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import { contentfulClient } from '../../lib/contentful';
import { CONTENTFUL_CONFIG } from '../../config/contentful';
import { Hero } from '../Hero';
import { TrustBar } from '../TrustBar';
import { LoanCalculator } from '../LoanCalculator';
import { ContentSection } from '../ContentSection';
import { AttorneyReferralForm } from '../AttorneyReferralForm';
import { SEO } from '../SEO';
import { Footer } from '../Footer';
import { LoadingSpinner } from '../LoadingSpinner';
import { ErrorMessage } from '../ErrorMessage';
import { transformContentfulFields } from '../../utils/contentful/transformers';
import type { LandingPage as LandingPageType } from '../../types/contentful';
import { landingPageStyles as styles } from './LandingPage.styles';

export const LandingPage: FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [page, setPage] = useState<LandingPageType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      if (!slug) {
        navigate('/', { replace: true });
        return;
      }

      try {
        console.log('Fetching page for slug:', slug);
        
        const response = await contentfulClient.getEntries({
          content_type: CONTENTFUL_CONFIG.contentTypes.landingPage,
          'fields.url_slug': slug,
          include: 2,
          limit: 1
        });

        console.log('Contentful Response:', {
          slug,
          total: response.total,
          items: response.items?.length,
          fields: response.items?.[0]?.fields ? Object.keys(response.items[0].fields) : []
        });

        if (!response.items?.length) {
          console.error('No page found for slug:', slug);
          throw new Error(`Page not found: ${slug}`);
        }

        const entry = response.items[0];
        console.log('Raw Contentful Entry:', {
          id: entry.sys.id,
          contentType: entry.sys.contentType.sys.id,
          fields: Object.keys(entry.fields),
          urlSlug: entry.fields.url_slug,
          city: entry.fields.city
        });

        const transformedPage = {
          sys: { id: entry.sys.id },
          fields: transformContentfulFields(entry)
        };

        console.log('Transformed Page:', {
          id: transformedPage.sys.id,
          title: transformedPage.fields.pageTitle,
          city: transformedPage.fields.city,
          slug: transformedPage.fields.urlSlug
        });

        setPage(transformedPage);
        setError(null);
      } catch (err) {
        console.error('Error loading page:', err);
        setError(err instanceof Error ? err.message : 'Failed to load page');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug, navigate]);

  if (loading) {
    return React.createElement(LoadingSpinner);
  }

  if (error || !page) {
    return React.createElement(ErrorMessage, {
      message: error || 'Page not found'
    });
  }

  const { fields } = page;

  return React.createElement('div', { className: styles.wrapper }, [
    React.createElement(SEO, {
      key: 'seo',
      pageTitle: fields.pageTitle,
      metaDescription: fields.metaDescription,
      schemaMarkup: fields.schemaMarkup || '{}',
      city: fields.city,
      state: fields.state,
      practiceArea: fields.practiceArea,
      imageUrl: fields.imageUrl,
      imageAltText: fields.imageAltText
    }),
    React.createElement(Hero, {
      key: 'hero',
      heading: fields.h1Heading,
      description: fields.contentSection1,
      metaDescription: {
        nodeType: 'document',
        data: {},
        content: [{
          nodeType: 'paragraph',
          data: {},
          content: [{
            nodeType: 'text',
            value: fields.metaDescription,
            marks: [],
            data: {}
          }]
        }]
      }
    }),
    React.createElement(TrustBar, { key: 'trust-bar' }),
    React.createElement('section', {
      key: 'calculator',
      className: styles.calculatorSection
    },
      React.createElement('div', { className: styles.calculatorContainer },
        React.createElement(LoanCalculator, {
          practiceArea: fields.practiceArea,
          location: fields.city
        })
      )
    ),
    React.createElement(ContentSection, {
      key: 'content',
      content1: fields.contentSection1,
      content2: fields.contentSection2,
      imageUrl: fields.imageUrl,
      location: {
        city: fields.city,
        state: fields.state,
        msaRegion: fields.msaRegion,
        surroundingCities: fields.surroundingCities
      }
    }),
    React.createElement(AttorneyReferralForm, { key: 'attorney-form' }),
    React.createElement(Footer, { key: 'footer' })
  ]);
};