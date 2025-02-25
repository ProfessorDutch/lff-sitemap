export const contentSectionStyles = {
  wrapper: "py-16 bg-white",
  container: "container mx-auto px-6 max-w-6xl",
  content: "mx-auto",
  
  // Why Choose Us section
  whyChooseUs: "grid md:grid-cols-2 gap-12 items-center mb-20",
  whyChooseUsContent: "space-y-6",
  heading: "text-3xl md:text-4xl font-bold text-[--secondary] leading-tight",
  text: "prose prose-lg text-gray-600 max-w-none",
  imageWrapper: "relative h-[340px] rounded-xl overflow-hidden shadow-xl", // Reduced height and adjusted border radius
  image: "w-full h-full object-cover",
  
  // Our Services section
  servicesSection: "text-center mx-auto",
  servicesHeading: "text-3xl md:text-4xl font-bold text-[--secondary] mb-8",
  servicesDescription: "prose prose-lg mx-auto text-gray-600",
  servicesGrid: "grid md:grid-cols-3 gap-8 mt-12"
} as const;