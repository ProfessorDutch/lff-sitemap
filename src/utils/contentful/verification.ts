import type { LandingPage, LandingPageFields } from '../../types/contentful';
import { isValidRichText } from '../validation/richText';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const verifyPageStructure = (page: LandingPage): ValidationResult => {
  const errors: string[] = [];
  const fields = page.fields;

  // Required string fields
  const requiredStringFields: (keyof LandingPageFields)[] = [
    'pageTitle',
    'city',
    'state',
    'caseType',
    'practiceArea',
    'msaRegion',
    'metaDescription',
    'imageUrl',
    'imageAltText',
    'countyName',
    'urlSlug'
  ];

  requiredStringFields.forEach(field => {
    if (!fields[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Rich text fields
  const richTextFields: (keyof LandingPageFields)[] = [
    'h1Heading',
    'contentSection1',
    'contentSection2',
    'ctaText'
  ];

  richTextFields.forEach(field => {
    if (!fields[field] || !isValidRichText(fields[field])) {
      errors.push(`Invalid rich text content in field: ${field}`);
    }
  });

  // Array fields
  if (!Array.isArray(fields.surroundingCities) || fields.surroundingCities.length === 0) {
    errors.push('surroundingCities must be a non-empty array');
  }

  // URL validation
  if (fields.imageUrl && !isValidUrl(fields.imageUrl)) {
    errors.push('Invalid imageUrl format');
  }

  // Slug validation
  if (fields.urlSlug && !/^[a-z0-9-]+$/.test(fields.urlSlug)) {
    errors.push('Invalid urlSlug format (should contain only lowercase letters, numbers, and hyphens)');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateAllPages = (pages: LandingPage[]): void => {
  console.log(`Validating ${pages.length} pages...`);
  
  pages.forEach((page, index) => {
    console.log(`\nValidating page ${index + 1}/${pages.length}:`);
    console.log(`Page ID: ${page.sys.id}`);
    console.log(`Title: ${page.fields.pageTitle}`);
    console.log(`Location: ${page.fields.city}, ${page.fields.state}`);
    
    const validation = verifyPageStructure(page);
    
    if (validation.isValid) {
      console.log('✓ Page structure is valid');
    } else {
      console.error('✗ Page structure validation failed:');
      validation.errors.forEach(error => console.error(`  - ${error}`));
    }
  });
  
  const validPages = pages.filter(page => verifyPageStructure(page).isValid);
  console.log(`\nValidation Summary:`);
  console.log(`Total Pages: ${pages.length}`);
  console.log(`Valid Pages: ${validPages.length}`);
  console.log(`Invalid Pages: ${pages.length - validPages.length}`);
};