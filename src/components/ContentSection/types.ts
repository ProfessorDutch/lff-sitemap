export interface Location {
  city: string;
  state: string;
  msaRegion: string;
  surroundingCities: string[];
}

export interface ContentSectionProps {
  content1: Document;
  content2: Document;
  imageUrl: string;
  location: Location;
}