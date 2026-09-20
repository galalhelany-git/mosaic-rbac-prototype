import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import type { ReactNode, TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'children'
> {
  counter?: boolean;
  errorMessage?: ReactNode;
  helpText?: ReactNode;
  label: ReactNode;
}

const lengthOf = (value: TextareaProps['value'], fallback: TextareaProps['defaultValue']) => {
  const current = value ?? fallback;
  return typeof current === 'string' || typeof current === 'number' ? String(current).length : 0;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    className,
    counter = false,
    defaultValue,
    disabled = false,
    errorMessage,
    helpText,
    id,
    label,
    maxLength,
    value,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const textareaId = id ?? `mosaic-textarea-${generatedId}`;
  const helpId = helpText ? `${textareaId}-help` : undefined;
  const errorId = errorMessage ? `${textareaId}-error` : undefined;
  const describedBy = [ariaDescribedBy, helpId, errorId].filter(Boolean).join(' ') || undefined;
  const invalid = Boolean(errorMessage) || ariaInvalid === true || ariaInvalid === 'true';

  return (
    <div
      className={clsx(
        'mosaic-field',
        'mosaic-textarea',
        disabled && 'mosaic-field--disabled',
        invalid && 'mosaic-field--invalid',
        className,
      )}
    >
      <div className="mosaic-field__label-row">
        <label className="mosaic-field__label" htmlFor={textareaId}>
          {label}
        </label>
        {counter && maxLength ? (
          <span aria-live="polite" className="mosaic-field__counter">
            {lengthOf(value, defaultValue)}/{maxLength}
          </span>
        ) : null}
      </div>
      <div className="mosaic-field__control-column">
        <textarea
          {...props}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          className="mosaic-textarea__control"
          defaultValue={defaultValue}
          disabled={disabled}
          id={textareaId}
          maxLength={maxLength}
          ref={ref}
          value={value}
        />
        {helpText ? (
          <div className="mosaic-field__help" id={helpId}>
            {helpText}
          </div>
        ) : null}
        {errorMessage ? (
          <div className="mosaic-field__error" id={errorId} role="alert">
            {errorMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
});
