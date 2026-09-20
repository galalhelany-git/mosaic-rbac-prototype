import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';

import { ChevronIcon, MoreIcon } from '../internal/Icons';

export interface BreadcrumbItem {
  href?: string;
  label: ReactNode;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  label?: string;
  maxItems?: number;
  moreLabel?: string;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
  { className, items, label = 'Breadcrumb', maxItems = 5, moreLabel = 'More pages', ...props },
  ref,
) {
  const collapse = items.length > maxItems;
  const visible = collapse ? [items[0], null, ...items.slice(-(maxItems - 2))] : items;

  return (
    <nav {...props} aria-label={label} className={clsx('mosaic-breadcrumb', className)} ref={ref}>
      <ol className="mosaic-breadcrumb__list">
        {visible.map((item, index) => {
          const current = index === visible.length - 1;
          return (
            <li
              className="mosaic-breadcrumb__item"
              key={item ? `${String(item.label)}-${index}` : 'ellipsis'}
            >
              {index > 0 ? (
                <ChevronIcon className="mosaic-breadcrumb__separator" direction="right" />
              ) : null}
              {item ? (
                current || !item.href ? (
                  <span
                    aria-current={current ? 'page' : undefined}
                    className={clsx(current && 'mosaic-breadcrumb__current')}
                  >
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href} onClick={item.onClick}>
                    {item.label}
                  </a>
                )
              ) : (
                <span aria-label={moreLabel} className="mosaic-breadcrumb__ellipsis" role="img">
                  <MoreIcon />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
});
