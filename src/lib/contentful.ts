import { createClient } from 'contentful';
import { CONTENTFUL_CONFIG } from '../config/contentful';

// Validate required configuration
if (!CONTENTFUL_CONFIG.space || !CONTENTFUL_CONFIG.accessToken) {
  throw new Error('Missing required Contentful configuration');
}

export const contentfulClient = createClient({
  space: CONTENTFUL_CONFIG.space,
  accessToken: CONTENTFUL_CONFIG.accessToken,
  environment: CONTENTFUL_CONFIG.environment,
  retryOnError: true,
  host: 'cdn.contentful.com'
});

// Log configuration and test connection
console.log('Contentful Configuration:', {
  space: CONTENTFUL_CONFIG.space,
  environment: CONTENTFUL_CONFIG.environment,
  contentType: CONTENTFUL_CONFIG.contentTypes.landingPage
});

// Test connection and log content model structure
contentfulClient.getContentType(CONTENTFUL_CONFIG.contentTypes.landingPage)
  .then(contentType => {
    console.log('Content Type Structure:', {
      id: contentType.sys.id,
      name: contentType.name,
      displayField: contentType.displayField,
      fields: contentType.fields.map(field => ({
        id: field.id,
        name: field.name,
        type: field.type,
        required: field.required,
        localized: field.localized
      }))
    });
  })
  .catch(error => {
    console.error('Error fetching content type:', error);
    console.error('Content type ID used:', CONTENTFUL_CONFIG.contentTypes.landingPage);
  });

// Test query for content
contentfulClient.getEntries({
  content_type: CONTENTFUL_CONFIG.contentTypes.landingPage,
  limit: 1
})
.then(response => {
  console.log('Sample Entry:', {
    total: response.total,
    hasItems: response.items.length > 0,
    firstItemFields: response.items[0] ? Object.keys(response.items[0].fields) : [],
    firstItemType: response.items[0]?.sys.contentType.sys.id
  });
})
.catch(error => {
  console.error('Error fetching sample entry:', error);
});

// Validate client initialization
if (!contentfulClient) {
  throw new Error('Failed to initialize Contentful client');
}