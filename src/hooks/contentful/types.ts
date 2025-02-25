import type { LandingPage } from '../../types/contentful';

export interface UseContentfulReturn {
  pages: LandingPage[];
  loading: boolean;
  error: string | null;
}

export interface ContentfulQueryOptions {
  content_type: string;
  include: number;
  'fields.urlSlug'?: string;
}