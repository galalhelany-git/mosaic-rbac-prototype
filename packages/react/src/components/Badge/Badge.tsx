import { forwardRef } from 'react';
import clsx from 'clsx';

import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'error';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  rounded?: boolean;
  variant?: BadgeVariant;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { children, className, rounded = true, variant = 'default', ...props },
  ref,
) {
  return (
    <span
      {...props}
      className={clsx(
        'mosaic-badge',
        `mosaic-badge--${variant}`,
        rounded && 'mosaic-badge--rounded',
        className,
      )}
      ref={ref}
    >
      {children}
    </span>
  );
});
