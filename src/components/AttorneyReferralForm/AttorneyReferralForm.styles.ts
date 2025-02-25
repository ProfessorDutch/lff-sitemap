export const attorneyReferralStyles = {
  wrapper: "relative bg-gradient-to-br from-[--secondary] to-[--primary-dark] pt-12 pb-16 text-white overflow-hidden",
  pattern: "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] opacity-30",
  container: "container mx-auto px-6 max-w-6xl relative z-10",
  content: "text-center max-w-3xl mx-auto mb-12",
  heading: "text-4xl md:text-5xl font-bold mb-4 leading-tight",
  headingHighlight: "text-[--accent] block mb-1",
  subheading: "text-xl text-white/90 max-w-2xl mx-auto",
  
  benefitsGrid: "grid md:grid-cols-3 gap-8 mb-16",
  benefitCard: "bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300",
  benefitIcon: "w-12 h-12 text-[--accent] mb-6",
  benefitTitle: "text-xl font-bold mb-3",
  benefitDescription: "text-white/80 leading-relaxed",

  ctaWrapper: "flex flex-col items-center justify-center max-w-xl mx-auto",
  ctaButton: "btn-primary bg-white text-[--primary] hover:bg-gray-100 text-lg px-12 py-4 shadow-xl hover:shadow-2xl w-auto",
  ctaSubtext: "text-white/80 mt-4 text-sm",

  formWrapper: "bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 max-w-2xl mx-auto",
  formHeader: "text-center mb-10",
  formTitle: "text-2xl font-bold mb-3",
  formSubtitle: "text-white/90 text-lg",
  form: "space-y-8",
  formGrid: "grid md:grid-cols-2 gap-6",
  field: "space-y-2",
  label: "block text-sm font-medium text-white",
  input: `w-full h-12 px-4 rounded-lg border-2 border-white/20 bg-white/10 text-white
          placeholder-white/50 focus:border-white focus:ring-2 focus:ring-white/20
          transition duration-200`,
  select: `w-full h-12 px-4 rounded-lg border-2 border-white/20 bg-white/10 text-white
          focus:border-white focus:ring-2 focus:ring-white/20 transition duration-200
          [&>option]:text-gray-800`,
  submitButton: "w-full h-12 btn-primary bg-white text-[--primary] hover:bg-gray-100 text-lg shadow-xl hover:shadow-2xl"
} as const;