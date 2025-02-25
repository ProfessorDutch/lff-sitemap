export const contactFormStyles = {
  wrapper: "bg-white rounded-xl shadow-lg p-6 md:p-8",
  heading: "text-2xl font-bold text-[--secondary] mb-6",
  form: "space-y-6",
  fieldGroup: "grid md:grid-cols-2 gap-6",
  field: "space-y-2",
  label: "block text-sm font-medium text-gray-700",
  input: `w-full h-12 px-4 rounded-lg border-2 border-gray-300 shadow-sm
          focus:border-[--primary] focus:ring-2 focus:ring-[--primary] focus:ring-opacity-20
          transition duration-200 text-base disabled:bg-gray-50 disabled:cursor-not-allowed`,
  select: `w-full h-12 px-4 rounded-lg border-2 border-gray-300 shadow-sm
          focus:border-[--primary] focus:ring-2 focus:ring-[--primary] focus:ring-opacity-20
          transition duration-200 text-base disabled:bg-gray-50 disabled:cursor-not-allowed`,
  error: "text-sm text-red-600 mt-1",
  submitButton: `w-full h-12 btn-primary text-base disabled:opacity-50 disabled:cursor-not-allowed
                 disabled:hover:scale-100 disabled:hover:shadow-lg`,
  successMessage: "flex items-center text-[--success] bg-green-50 p-4 rounded-lg mb-6",
  errorMessage: "flex items-center text-[--danger] bg-red-50 p-4 rounded-lg mb-6"
} as const;