import { forwardRef, useId, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import { ChevronIcon } from '../internal/Icons';

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'title'> {
  children: ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  title: ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  {
    children,
    className,
    defaultOpen = false,
    disabled = false,
    headingLevel = 3,
    onOpenChange,
    open,
    title,
    ...props
  },
  ref,
) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open ?? internalOpen;
  const panelId = useId();
  const Heading = `h${headingLevel}` as const;
  const toggle = () => {
    const next = !isOpen;
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <div {...props} className={clsx('mosaic-accordion', className)} ref={ref}>
      <Heading className="mosaic-accordion__heading">
        <button
          aria-controls={panelId}
          aria-expanded={isOpen}
          className="mosaic-accordion__trigger"
          disabled={disabled}
          onClick={toggle}
          type="button"
        >
          <span>{title}</span>
          <ChevronIcon className="mosaic-accordion__icon" direction={isOpen ? 'up' : 'down'} />
        </button>
      </Heading>
      <div className="mosaic-accordion__panel" hidden={!isOpen} id={panelId}>
        {children}
      </div>
    </div>
  );
});
