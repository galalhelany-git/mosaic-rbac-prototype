import { forwardRef } from 'react';
import clsx from 'clsx';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'aria-label' | 'children'
> {
  'aria-label': string;
  icon: ReactNode;
  loading?: boolean;
  notification?: ReactNode;
  size?: IconButtonSize;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  {
    'aria-label': ariaLabel,
    className,
    disabled = false,
    icon,
    loading = false,
    notification,
    size = 'lg',
    type = 'button',
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      aria-busy={loading || undefined}
      aria-label={ariaLabel}
      className={clsx('mosaic-icon-button', `mosaic-icon-button--${size}`, className)}
      data-loading={loading || undefined}
      disabled={disabled || loading}
      ref={ref}
      type={type}
    >
      <span aria-hidden="true" className="mosaic-icon-button__icon">
        {loading ? <span className="mosaic-icon-button__spinner" /> : icon}
      </span>
      {notification !== undefined ? (
        <span className="mosaic-icon-button__notification">{notification}</span>
      ) : null}
    </button>
  );
});
