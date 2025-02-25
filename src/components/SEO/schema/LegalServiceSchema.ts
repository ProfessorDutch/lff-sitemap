import type { SchemaOrgProps } from './types';

export const generateLegalServiceSchema = ({
  city,
  state,
  msaRegion,
  practiceArea
}: SchemaOrgProps): string => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `${practiceArea} Payment Plans in ${city}, ${state}`,
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": state
      }
    },
    "description": `ABA-compliant legal financing in ${city}, ${state} with flexible payment plans for ${practiceArea.toLowerCase()} cases.`,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "addressRegion": state,
        "addressLocality": city
      }
    }
  };

  return JSON.stringify(schema);
};