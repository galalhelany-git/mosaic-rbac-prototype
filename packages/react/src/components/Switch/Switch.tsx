import { forwardRef, useEffect, useId, useRef } from 'react';
import clsx from 'clsx';

import type { InputHTMLAttributes, ReactNode } from 'react';

export type SwitchSize = 'sm' | 'md';
export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'role' | 'size' | 'type'
> {
  indeterminate?: boolean;
  label: ReactNode;
  size?: SwitchSize;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { className, disabled = false, id, indeterminate = false, label, size = 'md', ...props },
  forwardedRef,
) {
  const generatedId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputId = id ?? `mosaic-switch-${generatedId}`;
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const setRef = (node: HTMLInputElement | null) => {
    inputRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };
  return (
    <label
      className={clsx(
        'mosaic-switch',
        `mosaic-switch--${size}`,
        disabled && 'mosaic-switch--disabled',
        className,
      )}
      htmlFor={inputId}
    >
      <input
        {...props}
        className="mosaic-switch__input"
        disabled={disabled}
        id={inputId}
        ref={setRef}
        role="switch"
        type="checkbox"
      />
      <span
        aria-hidden="true"
        className="mosaic-switch__track"
        data-indeterminate={indeterminate || undefined}
      >
        <span className="mosaic-switch__thumb" />
      </span>
      <span>{label}</span>
    </label>
  );
});
