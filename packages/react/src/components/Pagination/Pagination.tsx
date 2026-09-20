import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import clsx from 'clsx';

import { MoreIcon } from '../internal/Icons';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  currentPage: number;
  label?: string;
  nextAriaLabel?: string;
  nextLabel?: string;
  onPageChange: (page: number) => void;
  pageLabel?: (page: number) => string;
  previousAriaLabel?: string;
  previousLabel?: string;
  siblingCount?: number;
  totalPages: number;
}

function range(start: number, end: number) {
  return Array.from({ length: Math.max(0, end - start + 1) }, (_, index) => start + index);
}

function getPages(
  current: number,
  total: number,
  siblings: number,
): Array<number | 'ellipsis-start' | 'ellipsis-end'> {
  if (total <= siblings * 2 + 5) return range(1, total);
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  return [
    1,
    ...(left > 2 ? ['ellipsis-start' as const] : []),
    ...range(left, right),
    ...(right < total - 1 ? ['ellipsis-end' as const] : []),
    total,
  ];
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  {
    className,
    currentPage,
    label = 'Pagination',
    nextAriaLabel = 'Next page',
    nextLabel = 'Next',
    onPageChange,
    pageLabel = (page) => `Page ${page}`,
    previousAriaLabel = 'Previous page',
    previousLabel = 'Previous',
    siblingCount = 1,
    totalPages,
    ...props
  },
  ref,
) {
  const safeTotal = Math.max(1, totalPages);
  const safeCurrent = Math.min(safeTotal, Math.max(1, currentPage));
  return (
    <nav {...props} aria-label={label} className={clsx('mosaic-pagination', className)} ref={ref}>
      <button
        aria-label={previousAriaLabel}
        className="mosaic-pagination__button mosaic-pagination__button--direction"
        disabled={safeCurrent === 1}
        onClick={() => onPageChange(safeCurrent - 1)}
        type="button"
      >
        {previousLabel}
      </button>
      {getPages(safeCurrent, safeTotal, siblingCount).map((page) =>
        typeof page === 'number' ? (
          <button
            aria-current={page === safeCurrent ? 'page' : undefined}
            aria-label={pageLabel(page)}
            className="mosaic-pagination__button mosaic-pagination__button--page"
            key={page}
            onClick={() => onPageChange(page)}
            type="button"
          >
            {page}
          </button>
        ) : (
          <span aria-hidden="true" className="mosaic-pagination__ellipsis" key={page}>
            <MoreIcon />
          </span>
        ),
      )}
      <button
        aria-label={nextAriaLabel}
        className="mosaic-pagination__button mosaic-pagination__button--direction"
        disabled={safeCurrent === safeTotal}
        onClick={() => onPageChange(safeCurrent + 1)}
        type="button"
      >
        {nextLabel}
      </button>
    </nav>
  );
});
