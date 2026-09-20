import { forwardRef } from 'react';
import clsx from 'clsx';

import loadingDotDark from '../../assets/loading-dot-dark.svg';
import loadingDotLight from '../../assets/loading-dot.svg';
import loadingRingDark from '../../assets/loading-ring-dark.svg';
import loadingRingLight from '../../assets/loading-ring.svg';
import type { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled = false,
    leadingIcon,
    loading = false,
    size = 'lg',
    trailingIcon,
    type = 'button',
    variant = 'primary',
    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading;
  const loadingDot = variant === 'ghost' ? loadingDotDark : loadingDotLight;
  const loadingRing = variant === 'ghost' ? loadingRingDark : loadingRingLight;

  return (
    <button
      {...props}
      aria-busy={loading || undefined}
      className={clsx(
        'mosaic-button',
        `mosaic-button--${variant}`,
        `mosaic-button--${size}`,
        className,
      )}
      data-loading={loading || undefined}
      disabled={isDisabled}
      ref={ref}
      type={type}
    >
      {loading ? (
        <>
          <span aria-hidden="true" className="mosaic-button__loading">
            <img alt="" src={loadingDot} />
            <img alt="" src={loadingRing} />
            <img alt="" src={loadingDot} />
          </span>
          <span className="mosaic-visually-hidden">{children}</span>
        </>
      ) : (
        <>
          {leadingIcon ? (
            <span aria-hidden="true" className="mosaic-button__icon">
              {leadingIcon}
            </span>
          ) : null}
          <span className="mosaic-button__label">{children}</span>
          {trailingIcon ? (
            <span aria-hidden="true" className="mosaic-button__icon">
              {trailingIcon}
            </span>
          ) : null}
        </>
      )}
    </button>
  );
});
