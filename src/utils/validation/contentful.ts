import type { LandingPageFields } from '../../types/contentful';
import { isValidRichText } from './richText';

export interface ValidationError {
  field: string;
  message: string;
}

export const validateLandingPageFields = (fields: Partial<LandingPageFields>): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Required string fields
  const requiredFields: (keyof LandingPageFields)[] = [
    'pageTitle', 'city', 'state', 'caseType', 'practiceArea',
    'msaRegion', 'metaDescription', 'imageUrl', 'imageAltText',
    'countyName', 'urlSlug'
  ];

  requiredFields.forEach(field => {
    if (!fields[field]) {
      errors.push({
        field,
        message: `${field} is required`
      });
    }
  });

  // Rich text fields
  const richTextFields: (keyof LandingPageFields)[] = [
    'h1Heading', 'contentSection1', 'contentSection2', 'ctaText'
  ];

  richTextFields.forEach(field => {
    const content = fields[field];
    if (!content || !isValidRichText(content)) {
      errors.push({
        field,
        message: `${field} must be valid rich text content`
      });
    }
  });

  // Array fields
  if (!Array.isArray(fields.surroundingCities) || fields.surroundingCities.length === 0) {
    errors.push({
      field: 'surroundingCities',
      message: 'surroundingCities must be a non-empty array'
    });
  }

  // URL validation
  if (fields.imageUrl && !isValidUrl(fields.imageUrl)) {
    errors.push({
      field: 'imageUrl',
      message: 'imageUrl must be a valid URL'
    });
  }

  // Slug validation
  if (fields.urlSlug && !/^[a-z0-9-]+$/.test(fields.urlSlug)) {
    errors.push({
      field: 'urlSlug',
      message: 'urlSlug must contain only lowercase letters, numbers, and hyphens'
    });
  }

  return errors;
};

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};