import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

export interface TopNavigationProps extends HTMLAttributes<HTMLElement> {
  account?: ReactNode;
  actions?: ReactNode;
  brand: ReactNode;
  navigation?: ReactNode;
  navigationLabel?: string;
}

export const TopNavigation = forwardRef<HTMLElement, TopNavigationProps>(function TopNavigation(
  { account, actions, brand, className, navigation, navigationLabel = 'Primary', ...props },
  ref,
) {
  return (
    <header {...props} className={clsx('mosaic-top-navigation', className)} ref={ref}>
      <div className="mosaic-top-navigation__brand">{brand}</div>
      {navigation ? (
        <nav aria-label={navigationLabel} className="mosaic-top-navigation__nav">
          {navigation}
        </nav>
      ) : null}
      <div className="mosaic-top-navigation__actions">
        {actions}
        {account}
      </div>
    </header>
  );
});
