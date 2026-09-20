import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  label: string;
  orientation?: ButtonGroupOrientation;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(function ButtonGroup(
  { children, className, label, orientation = 'horizontal', ...props },
  ref,
) {
  return (
    <div
      {...props}
      aria-label={label}
      className={clsx('mosaic-button-group', `mosaic-button-group--${orientation}`, className)}
      ref={ref}
      role="group"
    >
      {Children.map(children, (child) => {
        if (!isValidElement<{ className?: string }>(child)) return child;
        return cloneElement(child as ReactElement<{ className?: string }>, {
          className: clsx(child.props.className, 'mosaic-button-group__item'),
        });
      })}
    </div>
  );
});
