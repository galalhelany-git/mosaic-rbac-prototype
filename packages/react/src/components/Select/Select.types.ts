import type { ReactNode, SelectHTMLAttributes } from 'react';

export type SelectSize = 'sm' | 'md';

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'children' | 'size'
> {
  children: ReactNode;
  counter?: ReactNode;
  errorMessage?: ReactNode;
  helpText?: ReactNode;
  label: ReactNode;
  leadingIcon?: ReactNode | false;
  size?: SelectSize;
}
