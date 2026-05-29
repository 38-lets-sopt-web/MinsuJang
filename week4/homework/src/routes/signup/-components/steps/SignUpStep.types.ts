import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { SignUpFormValues } from '../../-schemas/signUpSchema';

export type SignUpStepProps = {
  register: UseFormRegister<SignUpFormValues>;
  errors: FieldErrors<SignUpFormValues>;
  errorMessages: Partial<Record<keyof SignUpFormValues, string>>;
  disabled?: boolean;
};
