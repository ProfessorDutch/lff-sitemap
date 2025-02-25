export const ctaSectionStyles = {
  wrapper: "section-padding bg-gradient-to-br from-[--primary] via-[--accent] to-[--primary-dark] text-white relative",
  container: "section-container text-center relative z-10",
  content: "max-w-4xl mx-auto",
  heading: "text-3xl md:text-4xl font-bold mb-6",
  description: "text-xl md:text-2xl mb-10 text-gray-100",
  button: "btn-primary bg-white text-[--primary] hover:bg-gray-100 inline-flex mx-auto",
  trustIndicators: "grid md:grid-cols-3 gap-8 mt-16",
  trustCard: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20",
  trustIcon: "w-10 h-10 mb-4 text-white",
  trustTitle: "text-lg font-bold mb-2",
  trustText: "text-gray-100",
  overlay: "absolute inset-0 bg-gradient-to-b from-black/20 to-black/40",
  pattern: "absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,...')] bg-repeat"
} as const;