import { cloneElement, forwardRef, isValidElement, useId, useState } from 'react';
import type {
  FocusEvent,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';
import clsx from 'clsx';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  children: ReactElement;
  content: ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(function Tooltip(
  { children, className, content, placement = 'top', ...props },
  ref,
) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const existingDescription = (children.props as { 'aria-describedby'?: string })[
    'aria-describedby'
  ];
  const child = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        'aria-describedby': open
          ? [existingDescription, id].filter(Boolean).join(' ')
          : existingDescription,
        onBlur: (event: FocusEvent) => {
          (children.props as { onBlur?: (event: FocusEvent) => void }).onBlur?.(event);
          setOpen(false);
        },
        onFocus: (event: FocusEvent) => {
          (children.props as { onFocus?: (event: FocusEvent) => void }).onFocus?.(event);
          setOpen(true);
        },
        onMouseEnter: (event: MouseEvent) => {
          (children.props as { onMouseEnter?: (event: MouseEvent) => void }).onMouseEnter?.(event);
          setOpen(true);
        },
        onMouseLeave: (event: MouseEvent) => {
          (children.props as { onMouseLeave?: (event: MouseEvent) => void }).onMouseLeave?.(event);
          setOpen(false);
        },
        onKeyDown: (event: KeyboardEvent) => {
          (children.props as { onKeyDown?: (event: KeyboardEvent) => void }).onKeyDown?.(event);
          if (event.key === 'Escape') setOpen(false);
        },
      })
    : children;
  return (
    <span
      {...props}
      className={clsx('mosaic-tooltip', `mosaic-tooltip--${placement}`, className)}
      ref={ref}
    >
      {child}
      {open ? (
        <span className="mosaic-tooltip__content" id={id} role="tooltip">
          {content}
        </span>
      ) : null}
    </span>
  );
});
