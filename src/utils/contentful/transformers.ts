import type { Document } from '@contentful/rich-text-types';
import { CONTENTFUL_CONFIG } from '../../config/contentful';

export interface ContentfulEntry {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: Record<string, any>;
}

const createRichTextDocument = (content: any): Document => {
  // If content is already a rich text document, return it
  if (content && content.nodeType === 'document' && Array.isArray(content.content)) {
    return content;
  }

  // If content is a string, create a simple text document
  if (typeof content === 'string') {
    return {
      nodeType: 'document',
      data: {},
      content: [{
        nodeType: 'paragraph',
        data: {},
        content: [{
          nodeType: 'text',
          value: content,
          marks: [],
          data: {}
        }]
      }]
    };
  }

  // Default empty document
  return {
    nodeType: 'document',
    data: {},
    content: [{
      nodeType: 'paragraph',
      data: {},
      content: [{
        nodeType: 'text',
        value: '',
        marks: [],
        data: {}
      }]
    }]
  };
};

export const transformContentfulFields = (entry: ContentfulEntry) => {
  const { fields } = entry;
  
  console.log('Raw Contentful fields:', {
    id: entry.sys.id,
    contentType: entry.sys.contentType?.sys.id,
    availableFields: Object.keys(fields)
  });

  // Map fields using exact Contentful field names
  const transformed = {
    pageTitle: fields.page_title || '',
    city: fields.city || '',
    state: fields.state || '',
    caseType: fields.case_type || '',
    practiceArea: fields.practice_area || '',
    metaDescription: fields.meta_description || '',
    h1Heading: createRichTextDocument(fields.h1_heading),
    contentSection1: createRichTextDocument(fields.content_section_1),
    contentSection2: createRichTextDocument(fields.content_section_2),
    ctaText: createRichTextDocument(fields.cta_text),
    imageUrl: fields.image_url || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    imageAltText: fields.image_alt_text || '',
    surroundingCities: typeof fields.surrounding_cities === 'string' 
      ? fields.surrounding_cities.split(',').map(city => city.trim())
      : [],
    msaRegion: fields.msa_region || '',
    countyName: fields.county_name || '',
    urlSlug: fields.url_slug || '',
    schemaMarkup: fields.schema_markup || '{}'
  };

  console.log('Transformed fields:', {
    id: entry.sys.id,
    title: transformed.pageTitle,
    city: transformed.city,
    urlSlug: transformed.urlSlug,
    h1Present: !!transformed.h1Heading,
    content1Present: !!transformed.contentSection1,
    content2Present: !!transformed.contentSection2
  });

  return transformed;
};