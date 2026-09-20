import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import checkmark from '../../assets/checkmark.svg';
import chevronsUpDown from '../../assets/chevrons-up-down.svg';
import type { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    children,
    className,
    counter,
    disabled = false,
    errorMessage,
    helpText,
    id,
    label,
    leadingIcon,
    size = 'md',
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const selectId = id ?? `mosaic-select-${generatedId}`;
  const helpId = helpText ? `${selectId}-help` : undefined;
  const errorId = errorMessage ? `${selectId}-error` : undefined;
  const describedBy = [ariaDescribedBy, helpId, errorId].filter(Boolean).join(' ') || undefined;
  const invalid = Boolean(errorMessage) || ariaInvalid === true || ariaInvalid === 'true';
  const resolvedLeadingIcon =
    leadingIcon === undefined ? (
      <img alt="" src={checkmark} />
    ) : leadingIcon === false ? null : (
      leadingIcon
    );

  return (
    <div
      className={clsx(
        'mosaic-field',
        'mosaic-select',
        `mosaic-select--${size}`,
        disabled && 'mosaic-field--disabled',
        invalid && 'mosaic-field--invalid',
        className,
      )}
    >
      <div className="mosaic-field__label-row">
        <label className="mosaic-field__label" htmlFor={selectId}>
          {label}
        </label>
        {counter ? <span className="mosaic-field__counter">{counter}</span> : null}
      </div>

      <div className="mosaic-field__control-column">
        <div className="mosaic-select__field">
          {resolvedLeadingIcon ? (
            <span aria-hidden="true" className="mosaic-field__icon">
              {resolvedLeadingIcon}
            </span>
          ) : null}
          <select
            {...props}
            aria-describedby={describedBy}
            aria-invalid={invalid || undefined}
            className="mosaic-select__control"
            disabled={disabled}
            id={selectId}
            ref={ref}
          >
            {children}
          </select>
          <img aria-hidden="true" className="mosaic-select__chevrons" src={chevronsUpDown} />
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
