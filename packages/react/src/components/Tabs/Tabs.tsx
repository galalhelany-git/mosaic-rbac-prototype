import { forwardRef, useId, useState } from 'react';
import type { HTMLAttributes, KeyboardEvent, ReactNode } from 'react';
import clsx from 'clsx';

export interface TabItem {
  disabled?: boolean;
  id: string;
  label: ReactNode;
  panel: ReactNode;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  stretch?: boolean;
  tabs: TabItem[];
  type?: 'default' | 'line';
  value?: string;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  {
    className,
    defaultValue,
    onValueChange,
    orientation = 'horizontal',
    stretch = false,
    tabs,
    type = 'default',
    value,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const fallback = tabs.find((tab) => !tab.disabled)?.id ?? '';
  const [internalValue, setInternalValue] = useState(defaultValue ?? fallback);
  const selected = value ?? internalValue;
  const select = (id: string) => {
    if (value === undefined) setInternalValue(id);
    onValueChange?.(id);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const rtl = event.currentTarget.closest('[dir]')?.getAttribute('dir') === 'rtl';
    const forward = orientation === 'horizontal' ? (rtl ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown';
    const backward = orientation === 'horizontal' ? (rtl ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp';
    if (![forward, backward, 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const enabled = tabs.map((tab, i) => ({ tab, i })).filter(({ tab }) => !tab.disabled);
    const current = enabled.findIndex(({ i }) => i === index);
    const next =
      event.key === 'Home'
        ? enabled[0]
        : event.key === 'End'
          ? enabled.at(-1)
          : enabled[(current + (event.key === forward ? 1 : -1) + enabled.length) % enabled.length];
    if (next) {
      select(next.tab.id);
      document.getElementById(`${generatedId}-tab-${next.tab.id}`)?.focus();
    }
  };

  return (
    <div
      {...props}
      className={clsx(
        'mosaic-tabs',
        `mosaic-tabs--${orientation}`,
        `mosaic-tabs--${type}`,
        stretch && 'mosaic-tabs--stretch',
        className,
      )}
      ref={ref}
    >
      <div aria-orientation={orientation} className="mosaic-tabs__list" role="tablist">
        {tabs.map((tab, index) => (
          <button
            aria-controls={`${generatedId}-panel-${tab.id}`}
            aria-selected={selected === tab.id}
            className="mosaic-tabs__tab"
            disabled={tab.disabled}
            id={`${generatedId}-tab-${tab.id}`}
            key={tab.id}
            onClick={() => select(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            role="tab"
            tabIndex={selected === tab.id ? 0 : -1}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          aria-labelledby={`${generatedId}-tab-${tab.id}`}
          className="mosaic-tabs__panel"
          hidden={selected !== tab.id}
          id={`${generatedId}-panel-${tab.id}`}
          key={tab.id}
          role="tabpanel"
          tabIndex={0}
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
});
