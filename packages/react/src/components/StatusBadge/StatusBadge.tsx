import { forwardRef } from 'react';
import clsx from 'clsx';

import type { HTMLAttributes, ReactNode } from 'react';

export type StatusBadgeStatus = 'active' | 'inactive' | 'pending' | 'suspended' | 'expired';
export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  status: StatusBadgeStatus;
}
const labels: Record<StatusBadgeStatus, string> = {
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending',
  suspended: 'Suspended',
  expired: 'Expired',
};

export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(function StatusBadge(
  { children, className, status, ...props },
  ref,
) {
  return (
    <span
      {...props}
      className={clsx('mosaic-status-badge', `mosaic-status-badge--${status}`, className)}
      ref={ref}
    >
      {children ?? labels[status]}
    </span>
  );
});
