import { forwardRef, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { HTMLAttributes, KeyboardEvent } from 'react';
import clsx from 'clsx';

import { ChevronIcon } from '../internal/Icons';

export interface TimePickerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'defaultValue'
> {
  defaultValue?: string;
  disabled?: boolean;
  end?: string;
  label: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  start?: string;
  step?: number;
  value?: string;
}

const toMinutes = (value: string) => {
  const [hours = 0, minutes = 0] = value.split(':').map(Number);
  return hours * 60 + minutes;
};
const formatTime = (minutes: number) =>
  `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(function TimePicker(
  {
    className,
    defaultValue,
    disabled = false,
    end = '23:30',
    label,
    onValueChange,
    placeholder = 'Select time',
    start = '00:00',
    step = 30,
    value,
    ...props
  },
  ref,
) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const listId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef(false);
  const selected = value ?? internalValue;
  const options = useMemo(() => {
    const first = toMinutes(start);
    const last = toMinutes(end);
    const safeStep = Math.max(1, step);
    return Array.from({ length: Math.floor((last - first) / safeStep) + 1 }, (_, index) =>
      formatTime(first + index * safeStep),
    );
  }, [end, start, step]);
  const openList = () => {
    const selectedIndex = selected ? options.indexOf(selected) : -1;
    setActiveIndex(Math.max(0, selectedIndex));
    setOpen(true);
  };
  const closeList = (restoreFocus = true) => {
    restoreFocusRef.current = restoreFocus;
    setOpen(false);
  };
  const choose = (next: string) => {
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
    closeList();
  };
  useEffect(() => {
    if (open) {
      listRef.current?.querySelector<HTMLButtonElement>(`[data-index="${activeIndex}"]`)?.focus();
      return;
    }
    if (restoreFocusRef.current) {
      restoreFocusRef.current = false;
      triggerRef.current?.focus();
    }
  }, [activeIndex, listId, open]);
  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      openList();
    }
    if (event.key === 'Escape' && open) {
      event.preventDefault();
      closeList();
    }
  };
  const handleOptionKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;
    if (event.key === 'ArrowDown') nextIndex = (index + 1) % options.length;
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + options.length) % options.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = options.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      closeList();
    }
    if (event.key === 'Tab') closeList(false);
  };
  return (
    <div {...props} className={clsx('mosaic-time-picker', className)} ref={ref}>
      <button
        aria-controls={listId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`${label}: ${selected || placeholder}`}
        className="mosaic-time-picker__trigger"
        disabled={disabled}
        onClick={() => (open ? closeList(false) : openList())}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
        type="button"
      >
        <span className={clsx(!selected && 'mosaic-time-picker__placeholder')}>
          {selected || placeholder}
        </span>
        <ChevronIcon direction={open ? 'up' : 'down'} />
      </button>
      {open ? (
        <div
          aria-label={label}
          className="mosaic-time-picker__list"
          id={listId}
          ref={listRef}
          role="listbox"
        >
          {options.map((option, index) => (
            <button
              aria-selected={selected === option}
              className="mosaic-time-picker__option"
              data-index={index}
              id={`${listId}-${index}`}
              key={option}
              onClick={() => choose(option)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
              role="option"
              tabIndex={activeIndex === index ? 0 : -1}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
});
