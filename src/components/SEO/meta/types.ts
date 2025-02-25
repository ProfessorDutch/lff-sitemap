export interface MetaTag {
  property?: string;
  name?: string;
  content: string;
}

export interface OpenGraphProps {
  title: string;
  description: string;
  imageUrl?: string;
  city: string;
  practiceArea: string;
}