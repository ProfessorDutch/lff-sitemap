export interface SchemaOrgProps {
  city: string;
  state: string;
  msaRegion: string;
  practiceArea: string;
}

export interface LegalServiceSchema {
  "@context": "https://schema.org";
  "@type": "LegalService";
  name: string;
  areaServed: {
    "@type": "City";
    name: string;
    containedInPlace: {
      "@type": "State";
      name: string;
    };
  };
  description: string;
  serviceArea: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      addressRegion: string;
      addressLocality: string;
    };
  };
}