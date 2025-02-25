export const CASE_TYPES = [
  { value: 'criminal', label: 'Criminal Defense' },
  { value: 'family', label: 'Family Law' },
  { value: 'immigration', label: 'Immigration' },
  { value: 'tax', label: 'Tax Law' },
  { value: 'timeshare', label: 'Timeshare Disputes' },
  { value: 'estate', label: 'Estate Planning' }
] as const;

export const INITIAL_FORM_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  zipCode: '',
  caseType: ''
} as const;