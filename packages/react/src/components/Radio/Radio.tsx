import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import type { InputHTMLAttributes, ReactNode } from 'react';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { className, disabled = false, id, label, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? `mosaic-radio-${generatedId}`;
  return (
    <label
      className={clsx('mosaic-radio', disabled && 'mosaic-radio--disabled', className)}
      htmlFor={inputId}
    >
      <input
        {...props}
        className="mosaic-radio__input"
        disabled={disabled}
        id={inputId}
        ref={ref}
        type="radio"
      />
      <span aria-hidden="true" className="mosaic-radio__mark" />
      <span>{label}</span>
    </label>
  );
});
