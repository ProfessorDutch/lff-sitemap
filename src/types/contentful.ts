import type { Document } from '@contentful/rich-text-types';

export interface LandingPageFields {
  pageTitle: string;
  city: string;
  state: string;
  caseType: string;
  practiceArea: string;
  msaRegion: string;
  metaDescription: string;
  h1Heading: Document;
  contentSection1: Document;
  contentSection2: Document;
  ctaText: Document;
  imageUrl: string;
  imageAltText: string;
  surroundingCities: string[];
  countyName: string;
  urlSlug: string;
}

export interface LandingPage {
  sys: {
    id: string;
  };
  fields: LandingPageFields;
}

export type ContentfulRichText = Document;

export interface ContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}