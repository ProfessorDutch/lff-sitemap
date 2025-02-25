import type { Document } from '@contentful/rich-text-types';

export interface LandingPageFields {
  pageTitle: string;
  city: string;
  state: string;
  caseType: string;
  practiceArea: string;
  metaDescription: string;
  h1Heading: Document;
  contentSection1: Document;
  contentSection2: Document;
  imageUrl: string;
  imageAltText: string;
  surroundingCities: string[];
  msaRegion: string;
  countyName: string;
  urlSlug: string;
}

export interface LandingPage {
  sys: {
    id: string;
  };
  fields: LandingPageFields;
}

export interface LandingPageProps {
  page: LandingPage;
}