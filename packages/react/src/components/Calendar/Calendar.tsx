import { forwardRef, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { HTMLAttributes, KeyboardEvent } from 'react';
import clsx from 'clsx';

import { ChevronIcon } from '../internal/Icons';

export interface DateRange {
  end?: Date;
  start?: Date;
}
export interface CalendarPreset {
  label: string;
  value: Date | DateRange;
}

export interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  disabledDate?: (date: Date) => boolean;
  locale?: string;
  mode?: 'single' | 'range';
  month?: Date;
  nextMonthLabel?: string;
  onChange?: (value: Date | DateRange) => void;
  onMonthChange?: (month: Date) => void;
  presetsLabel?: string;
  presets?: CalendarPreset[];
  previousMonthLabel?: string;
  value?: Date | DateRange;
  weekStartsOn?: 0 | 1;
}

const sameDay = (a?: Date, b?: Date) =>
  Boolean(
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate(),
  );
const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
const addDays = (date: Date, days: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
const addMonths = (date: Date, months: number) => {
  const target = new Date(date.getFullYear(), date.getMonth() + months + 1, 0).getDate();
  return new Date(date.getFullYear(), date.getMonth() + months, Math.min(date.getDate(), target));
};

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(function Calendar(
  {
    className,
    disabledDate,
    locale,
    mode = 'single',
    month,
    nextMonthLabel = 'Next month',
    onChange,
    onMonthChange,
    presetsLabel = 'Date presets',
    presets,
    previousMonthLabel = 'Previous month',
    value,
    weekStartsOn = 0,
    ...props
  },
  ref,
) {
  const initial = value instanceof Date ? value : value?.start;
  const calendarId = useId();
  const [internalMonth, setInternalMonth] = useState(() =>
    startOfDay(month ?? initial ?? new Date()),
  );
  const [focusDate, setFocusDate] = useState(() => startOfDay(initial ?? new Date()));
  const moveFocusRef = useRef(false);
  const visibleMonth = month ?? internalMonth;
  const range = value instanceof Date ? undefined : value;
  const selected = value instanceof Date ? value : undefined;
  const first = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const offset = (first.getDay() - weekStartsOn + 7) % 7;
  const gridStart = addDays(first, -offset);
  const days = useMemo(
    () => Array.from({ length: 42 }, (_, index) => addDays(gridStart, index)),
    [gridStart.getTime()],
  );
  const weekdays = useMemo(
    () =>
      Array.from({ length: 7 }, (_, index) =>
        new Intl.DateTimeFormat(locale, { weekday: 'short' })
          .format(addDays(new Date(2024, 0, weekStartsOn), index))
          .slice(0, 2),
      ),
    [locale, weekStartsOn],
  );
  const changeMonth = (delta: number) => {
    const next = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + delta, 1);
    if (month === undefined) setInternalMonth(next);
    onMonthChange?.(next);
  };
  const showMonthFor = (date: Date) => {
    if (
      date.getFullYear() === visibleMonth.getFullYear() &&
      date.getMonth() === visibleMonth.getMonth()
    )
      return;
    const next = new Date(date.getFullYear(), date.getMonth(), 1);
    if (month === undefined) setInternalMonth(next);
    onMonthChange?.(next);
  };
  const focusDay = (date: Date) => {
    let next = startOfDay(date);
    for (let index = 0; index < 42 && disabledDate?.(next); index += 1) next = addDays(next, 1);
    moveFocusRef.current = true;
    setFocusDate(next);
    showMonthFor(next);
  };
  useEffect(() => {
    if (!moveFocusRef.current) return;
    moveFocusRef.current = false;
    document.getElementById(`${calendarId}-${focusDate.toISOString().slice(0, 10)}`)?.focus();
  }, [calendarId, focusDate, visibleMonth]);
  const handleDayKeyDown = (event: KeyboardEvent<HTMLButtonElement>, date: Date) => {
    const direction = event.currentTarget.closest('[dir]')?.getAttribute('dir');
    const horizontalStep = direction === 'rtl' ? -1 : 1;
    let next: Date | undefined;
    if (event.key === 'ArrowRight') next = addDays(date, horizontalStep);
    if (event.key === 'ArrowLeft') next = addDays(date, -horizontalStep);
    if (event.key === 'ArrowDown') next = addDays(date, 7);
    if (event.key === 'ArrowUp') next = addDays(date, -7);
    if (event.key === 'Home') next = addDays(date, -((date.getDay() - weekStartsOn + 7) % 7));
    if (event.key === 'End') next = addDays(date, 6 - ((date.getDay() - weekStartsOn + 7) % 7));
    if (event.key === 'PageUp') next = addMonths(date, -1);
    if (event.key === 'PageDown') next = addMonths(date, 1);
    if (!next) return;
    event.preventDefault();
    focusDay(next);
  };
  const choose = (date: Date) => {
    if (disabledDate?.(date)) return;
    if (mode === 'single') return onChange?.(date);
    if (!range?.start || range.end) return onChange?.({ start: date });
    if (date < range.start) return onChange?.({ start: date, end: range.start });
    onChange?.({ start: range.start, end: date });
  };

  return (
    <div
      {...props}
      className={clsx('mosaic-calendar', presets?.length && 'mosaic-calendar--presets', className)}
      ref={ref}
    >
      <div className="mosaic-calendar__main">
        <div className="mosaic-calendar__header">
          <button aria-label={previousMonthLabel} onClick={() => changeMonth(-1)} type="button">
            <ChevronIcon direction="left" />
          </button>
          <strong aria-live="polite" id={`${calendarId}-month`}>
            {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(
              visibleMonth,
            )}
          </strong>
          <button aria-label={nextMonthLabel} onClick={() => changeMonth(1)} type="button">
            <ChevronIcon direction="right" />
          </button>
        </div>
        <div aria-hidden="true" className="mosaic-calendar__weekdays">
          {weekdays.map((day, index) => (
            <span key={`${day}-${index}`}>{day}</span>
          ))}
        </div>
        <div aria-labelledby={`${calendarId}-month`} className="mosaic-calendar__grid" role="grid">
          {Array.from({ length: 6 }, (_, week) => (
            <div className="mosaic-calendar__week" key={week} role="row">
              {days.slice(week * 7, week * 7 + 7).map((date) => {
                const inMonth = date.getMonth() === visibleMonth.getMonth();
                const isStart = sameDay(date, range?.start);
                const isEnd = sameDay(date, range?.end);
                const inRange = Boolean(
                  range?.start && range.end && date > range.start && date < range.end,
                );
                const active = sameDay(date, selected) || isStart || isEnd;
                const disabled = Boolean(disabledDate?.(date));
                return (
                  <button
                    aria-label={new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(date)}
                    aria-selected={active || inRange}
                    className={clsx(
                      'mosaic-calendar__day',
                      !inMonth && 'mosaic-calendar__day--outside',
                      inRange && 'mosaic-calendar__day--range',
                      active && 'mosaic-calendar__day--selected',
                    )}
                    disabled={disabled}
                    id={`${calendarId}-${date.toISOString().slice(0, 10)}`}
                    key={date.toISOString()}
                    onClick={() => choose(date)}
                    onFocus={() => setFocusDate(date)}
                    onKeyDown={(event) => handleDayKeyDown(event, date)}
                    role="gridcell"
                    tabIndex={sameDay(date, focusDate) ? 0 : -1}
                    type="button"
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {presets?.length ? (
        <div aria-label={presetsLabel} className="mosaic-calendar__presets" role="group">
          {presets.map((preset) => (
            <button key={preset.label} onClick={() => onChange?.(preset.value)} type="button">
              {preset.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
});
