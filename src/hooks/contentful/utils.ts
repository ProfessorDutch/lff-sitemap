import { contentfulClient } from '../../lib/contentful';
import { CONTENTFUL_CONFIG } from '../../config/contentful';
import type { LandingPage } from '../../types/contentful';

export const fetchContentfulEntries = async () => {
  if (!contentfulClient) {
    throw new Error('Contentful client not initialized');
  }

  const response = await contentfulClient.getEntries<LandingPage>({
    content_type: CONTENTFUL_CONFIG.contentTypes.landingPage,
    include: 2,
    limit: 10,
    order: '-sys.createdAt'
  });

  return response.items as LandingPage[];
};