import { forwardRef, useState } from 'react';
import type { HTMLAttributes, KeyboardEvent, ReactNode } from 'react';
import clsx from 'clsx';

export interface DashboardToggleOption {
  icon?: ReactNode;
  label: string;
  value: string;
}

export interface DashboardToggleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue?: string;
  label?: string;
  onValueChange?: (value: string) => void;
  options: DashboardToggleOption[];
  value?: string;
}

export const DashboardToggle = forwardRef<HTMLDivElement, DashboardToggleProps>(
  function DashboardToggle(
    { className, defaultValue, label = 'Dashboard view', onValueChange, options, value, ...props },
    ref,
  ) {
    const [internalValue, setInternalValue] = useState(defaultValue ?? options[0]?.value ?? '');
    const selected = value ?? internalValue;
    const select = (next: string) => {
      if (value === undefined) setInternalValue(next);
      onValueChange?.(next);
    };
    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key))
        return;
      event.preventDefault();
      const direction = event.currentTarget.closest('[dir]')?.getAttribute('dir');
      const previous = ['ArrowLeft', 'ArrowUp'].includes(event.key);
      const offset =
        direction === 'rtl' && ['ArrowLeft', 'ArrowRight'].includes(event.key)
          ? previous
            ? 1
            : -1
          : previous
            ? -1
            : 1;
      const nextIndex =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? options.length - 1
            : (index + offset + options.length) % options.length;
      const next = options[nextIndex];
      if (!next) return;
      select(next.value);
      const group = event.currentTarget.closest('[role="radiogroup"]');
      group?.querySelectorAll<HTMLButtonElement>('[role="radio"]')[nextIndex]?.focus();
    };
    return (
      <div
        {...props}
        aria-label={label}
        className={clsx('mosaic-dashboard-toggle', className)}
        ref={ref}
        role="radiogroup"
      >
        {options.map((option) => (
          <button
            aria-checked={selected === option.value}
            className="mosaic-dashboard-toggle__option"
            key={option.value}
            onClick={() => select(option.value)}
            onKeyDown={(event) => handleKeyDown(event, options.indexOf(option))}
            role="radio"
            tabIndex={selected === option.value ? 0 : -1}
            type="button"
          >
            {option.icon ? (
              <span aria-hidden="true" className="mosaic-dashboard-toggle__icon">
                {option.icon}
              </span>
            ) : null}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    );
  },
);
