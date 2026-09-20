import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import clsx from 'clsx';

import organizationAdminIcon from '../../assets/role-organization-admin.svg';
import organizationAdminIconSmall from '../../assets/role-organization-admin-small.svg';
import superAdminIcon from '../../assets/role-super-admin.svg';
import superAdminIconSmall from '../../assets/role-super-admin-small.svg';
import systemAdminIcon from '../../assets/role-system-admin.svg';
import systemAdminIconSmall from '../../assets/role-system-admin-small.svg';
import userIcon from '../../assets/role-user.svg';
import userIconSmall from '../../assets/role-user-small.svg';

export type UserRole = 'user' | 'system-admin' | 'organization-admin' | 'super-admin';

const roleNames: Record<UserRole, string> = {
  'organization-admin': 'Organization Admin',
  'super-admin': 'Super Admin',
  'system-admin': 'System Admin',
  user: 'User',
};
const roleIcons: Record<UserRole, string> = {
  'organization-admin': organizationAdminIcon,
  'super-admin': superAdminIcon,
  'system-admin': systemAdminIcon,
  user: userIcon,
};
const smallRoleIcons: Record<UserRole, string> = {
  'organization-admin': organizationAdminIconSmall,
  'super-admin': superAdminIconSmall,
  'system-admin': systemAdminIconSmall,
  user: userIconSmall,
};

export interface RoleBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  role: UserRole;
  size?: 16 | 32;
}

export const RoleBadge = forwardRef<HTMLSpanElement, RoleBadgeProps>(function RoleBadge(
  { className, role, size = 32, ...props },
  ref,
) {
  return (
    <span
      {...props}
      aria-label={roleNames[role]}
      className={clsx('mosaic-role-badge', `mosaic-role-badge--${size}`, className)}
      ref={ref}
      role="img"
    >
      <img alt="" src={(size === 16 ? smallRoleIcons : roleIcons)[role]} />
    </span>
  );
});

export interface RoleBadgeCellProps extends HTMLAttributes<HTMLSpanElement> {
  role: UserRole;
  showRoleName?: boolean;
}

export const RoleBadgeCell = forwardRef<HTMLSpanElement, RoleBadgeCellProps>(function RoleBadgeCell(
  { className, role, showRoleName = true, ...props },
  ref,
) {
  return (
    <span {...props} className={clsx('mosaic-role-badge-cell', className)} ref={ref}>
      <RoleBadge role={role} size={16} />
      {showRoleName ? <span>{roleNames[role]}</span> : null}
    </span>
  );
});
