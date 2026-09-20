import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import type { InputProps } from './Input.types';

const getTextLength = (
  value: InputProps['value'],
  defaultValue: InputProps['defaultValue'],
): number => {
  const currentValue = value ?? defaultValue;
  return typeof currentValue === 'string' || typeof currentValue === 'number'
    ? String(currentValue).length
    : 0;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    action,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    className,
    counter = false,
    defaultValue,
    disabled = false,
    errorMessage,
    helpText,
    horizontal = false,
    id,
    label,
    leadingIcon,
    maxLength,
    trailingIcon,
    type = 'text',
    value,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? `mosaic-input-${generatedId}`;
  const helpId = helpText ? `${inputId}-help` : undefined;
  const errorId = errorMessage ? `${inputId}-error` : undefined;
  const describedBy = [ariaDescribedBy, helpId, errorId].filter(Boolean).join(' ') || undefined;
  const invalid = Boolean(errorMessage) || ariaInvalid === true || ariaInvalid === 'true';

  return (
    <div
      className={clsx(
        'mosaic-field',
        horizontal && 'mosaic-field--horizontal',
        disabled && 'mosaic-field--disabled',
        invalid && 'mosaic-field--invalid',
        className,
      )}
    >
      <div className="mosaic-field__label-row">
        <label className="mosaic-field__label" htmlFor={inputId}>
          {label}
        </label>
        {counter && maxLength ? (
          <span aria-live="polite" className="mosaic-field__counter">
            {getTextLength(value, defaultValue)}/{maxLength}
          </span>
        ) : null}
      </div>

      <div className="mosaic-field__control-column">
        <div className="mosaic-field__control-row">
          <div className="mosaic-input__field">
            {leadingIcon ? (
              <span aria-hidden="true" className="mosaic-field__icon">
                {leadingIcon}
              </span>
            ) : null}
            <input
              {...props}
              aria-describedby={describedBy}
              aria-invalid={invalid || undefined}
              className="mosaic-input__control"
              defaultValue={defaultValue}
              disabled={disabled}
              id={inputId}
              maxLength={maxLength}
              ref={ref}
              type={type}
              value={value}
            />
            {trailingIcon ? (
              <span aria-hidden="true" className="mosaic-field__icon">
                {trailingIcon}
              </span>
            ) : null}
          </div>
          {action ? <div className="mosaic-field__action">{action}</div> : null}
        </div>

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
