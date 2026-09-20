import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputType = 'file' | 'text';

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'children' | 'size' | 'type'
> {
  action?: ReactNode;
  counter?: boolean;
  errorMessage?: ReactNode;
  helpText?: ReactNode;
  horizontal?: boolean;
  label: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  type?: InputType;
}
