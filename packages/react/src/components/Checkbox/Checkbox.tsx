import { forwardRef, useEffect, useId, useRef } from 'react';
import clsx from 'clsx';

import type { InputHTMLAttributes, ReactNode } from 'react';
import checkmark from '../../assets/checkbox-check.svg';
import minus from '../../assets/checkbox-minus.svg';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  indeterminate?: boolean;
  label: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, disabled = false, id, indeterminate = false, label, ...props },
  forwardedRef,
) {
  const generatedId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputId = id ?? `mosaic-checkbox-${generatedId}`;

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
      className={clsx('mosaic-choice', disabled && 'mosaic-choice--disabled', className)}
      htmlFor={inputId}
    >
      <input
        {...props}
        className="mosaic-choice__input"
        disabled={disabled}
        id={inputId}
        ref={setRef}
        type="checkbox"
      />
      <span
        aria-hidden="true"
        className="mosaic-choice__box"
        data-indeterminate={indeterminate || undefined}
      >
        <img alt="" className="mosaic-choice__check" src={checkmark} />
        <img alt="" className="mosaic-choice__minus" src={minus} />
      </span>
      <span className="mosaic-choice__label">{label}</span>
    </label>
  );
});
