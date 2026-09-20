import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import type { HTMLAttributes, KeyboardEvent } from 'react';
import clsx from 'clsx';

import { Calendar } from '../Calendar';
import type { CalendarPreset, DateRange } from '../Calendar';
import { CalendarIcon } from '../internal/Icons';

export interface DatePickerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'defaultValue'
> {
  defaultValue?: Date | DateRange;
  disabled?: boolean;
  label: string;
  locale?: string;
  mode?: 'single' | 'range';
  onValueChange?: (value: Date | DateRange) => void;
  placeholder?: string;
  presets?: CalendarPreset[];
  value?: Date | DateRange;
}

function formatValue(value: Date | DateRange | undefined, locale?: string) {
  const formatter = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  if (value instanceof Date) return formatter.format(value);
  if (value?.start && value.end)
    return `${formatter.format(value.start)} – ${formatter.format(value.end)}`;
  if (value?.start) return `${formatter.format(value.start)} – …`;
  return '';
}

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(function DatePicker(
  {
    className,
    defaultValue,
    disabled = false,
    label,
    locale,
    mode = 'single',
    onValueChange,
    placeholder = 'Select date',
    presets,
    value,
    ...props
  },
  ref,
) {
  const [internalValue, setInternalValue] = useState<Date | DateRange | undefined>(defaultValue);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);
  const pickerId = useId();
  const selected = value ?? internalValue;
  const displayValue = formatValue(selected, locale) || placeholder;
  const choose = (next: Date | DateRange) => {
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
    if (mode === 'single' || (!(next instanceof Date) && next.end)) setOpen(false);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      setOpen(false);
    }
  };
  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      popoverRef.current
        ?.querySelector<HTMLButtonElement>('[role="gridcell"][tabindex="0"]')
        ?.focus();
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  return (
    <div
      {...props}
      className={clsx('mosaic-date-picker', className)}
      onKeyDown={onKeyDown}
      ref={ref}
    >
      <button
        aria-controls={pickerId}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={`${label}: ${displayValue}`}
        className="mosaic-date-picker__trigger"
        disabled={disabled}
        onClick={() => setOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        <span className={clsx(!selected && 'mosaic-date-picker__placeholder')}>{displayValue}</span>
        <CalendarIcon />
      </button>
      {open ? (
        <div
          aria-label={label}
          className="mosaic-date-picker__popover"
          id={pickerId}
          ref={popoverRef}
          role="dialog"
        >
          <Calendar
            locale={locale}
            mode={mode}
            onChange={choose}
            presets={presets}
            value={selected}
          />
        </div>
      ) : null}
    </div>
  );
});
