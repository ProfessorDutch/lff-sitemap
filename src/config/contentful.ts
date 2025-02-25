export const CONTENTFUL_CONFIG = {
  space: 'vqfwb6i9gobc',
  accessToken: 'D28nu7oXlUfU86Zx6ebvbkGN2eay2HZXJb5xa1pYN_E',
  environment: 'master',
  contentTypes: {
    landingPage: 'legalleads'
  },
  // Updated field mappings to match exact Contentful field names
  fields: {
    pageTitle: 'page_title',
    city: 'city',
    state: 'state',
    caseType: 'case_type',
    practiceArea: 'practice_area',
    msaRegion: 'msa_region',
    metaDescription: 'meta_description',
    h1Heading: 'h1_heading',
    contentSection1: 'content_section_1',
    contentSection2: 'content_section_2',
    ctaText: 'cta_text',
    imageUrl: 'image_url',
    imageAltText: 'image_alt_text',
    surroundingCities: 'surrounding_cities',
    countyName: 'county_name',
    urlSlug: 'url_slug',
    schemaMarkup: 'schema_markup'
  }
} as const;