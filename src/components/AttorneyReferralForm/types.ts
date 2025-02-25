export interface AttorneyFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practiceType: string;
}

export interface AttorneyFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  practiceType?: string;
}

export interface AttorneyFormProps {
  className?: string;
  onSubmit?: (data: AttorneyFormData) => Promise<void>;
}