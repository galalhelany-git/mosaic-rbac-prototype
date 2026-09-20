import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'tertiary';

type ButtonBaseProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  children: ReactNode;
  leadingIcon?: ReactNode;
  size?: ButtonSize;
  trailingIcon?: ReactNode;
};

type LoadableButtonProps = {
  loading?: boolean;
  variant?: Exclude<ButtonVariant, 'tertiary'>;
};

type TertiaryButtonProps = {
  loading?: never;
  variant: 'tertiary';
};

export type ButtonProps = ButtonBaseProps & (LoadableButtonProps | TertiaryButtonProps);
