import clsx from 'clsx';

import type { HTMLAttributes, ReactNode } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerSize = 'sm' | 'md' | 'lg' | 'hg';
export type DividerVariant = 'solid' | 'dashed';
export interface DividerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label?: ReactNode;
  orientation?: DividerOrientation;
  size?: DividerSize;
  variant?: DividerVariant;
}

export function Divider({
  className,
  label,
  orientation = 'horizontal',
  size = 'md',
  variant = 'solid',
  ...props
}: DividerProps) {
  return (
    <div
      {...props}
      aria-orientation={orientation}
      className={clsx(
        'mosaic-divider',
        `mosaic-divider--${orientation}`,
        `mosaic-divider--${size}`,
        `mosaic-divider--${variant}`,
        label && 'mosaic-divider--labelled',
        className,
      )}
      role="separator"
    >
      {label ? (
        <>
          <span className="mosaic-divider__line" />
          <span className="mosaic-divider__label">{label}</span>
          <span className="mosaic-divider__line" />
        </>
      ) : null}
    </div>
  );
}
