import clsx from 'clsx';

import type { HTMLAttributes } from 'react';

export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';
export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  'aria-label': string;
  max?: number;
  size?: ProgressSize;
  value: number;
}

export function Progress({
  'aria-label': ariaLabel,
  className,
  max = 100,
  size = 'md',
  value,
  ...props
}: ProgressProps) {
  const safeMax = max > 0 ? max : 100;
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percentage = (safeValue / safeMax) * 100;
  return (
    <div
      {...props}
      aria-label={ariaLabel}
      aria-valuemax={safeMax}
      aria-valuemin={0}
      aria-valuenow={safeValue}
      className={clsx('mosaic-progress', `mosaic-progress--${size}`, className)}
      role="progressbar"
    >
      <span className="mosaic-progress__value" style={{ inlineSize: `${percentage}%` }} />
    </div>
  );
}
