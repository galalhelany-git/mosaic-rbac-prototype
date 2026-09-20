import { forwardRef } from 'react';
import clsx from 'clsx';

import type { ButtonHTMLAttributes } from 'react';
import type { IconButtonSize } from '../IconButton';

export interface CloseButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  selected?: boolean;
  size?: IconButtonSize;
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(
  {
    'aria-label': ariaLabel = 'Close',
    className,
    selected = false,
    size = 'lg',
    type = 'button',
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      aria-pressed={selected || undefined}
      className={clsx('mosaic-close-button', `mosaic-close-button--${size}`, className)}
      ref={ref}
      type={type}
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
});
