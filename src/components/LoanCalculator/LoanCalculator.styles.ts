export const loanCalculatorStyles = {
  wrapper: "max-w-6xl mx-auto",
  heading: "text-2xl font-bold text-[--secondary] mb-8",
  sliderContainer: "space-y-8",
  sliderGroup: "space-y-4 max-w-2xl mx-auto",
  label: "text-sm font-medium text-gray-600 flex justify-between",
  amount: "text-2xl font-semibold text-[--primary]",
  slider: `w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-6
          [&::-webkit-slider-thumb]:h-6
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-[--primary]
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:w-6
          [&::-moz-range-thumb]:h-6
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-[--primary]
          [&::-moz-range-thumb]:border-0`,
  optionCard: "bg-white rounded-xl shadow-lg p-8 border-2 transition-all duration-300",
  optionHeader: "flex items-start justify-between mb-6",
  optionTitle: "text-xl font-bold text-[--secondary]",
  results: "space-y-4",
  resultRow: "flex justify-between items-center",
  resultLabel: "text-gray-600",
  resultValue: "text-lg font-semibold text-[--secondary]",
  divider: "border-t border-gray-100 my-4",
  note: "text-sm text-gray-500 italic text-center mt-12"
} as const;