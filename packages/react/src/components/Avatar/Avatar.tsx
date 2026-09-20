import { forwardRef } from 'react';
import clsx from 'clsx';

import type { HTMLAttributes, ReactNode } from 'react';

export type AvatarShape = 'square' | 'rounded' | 'circle';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'offline';
export interface AvatarProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  alt?: string;
  disabled?: boolean;
  initials?: string;
  name: string;
  roleBadge?: ReactNode;
  shape?: AvatarShape;
  size?: AvatarSize;
  src?: string;
  status?: AvatarStatus;
}

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  {
    alt,
    className,
    disabled = false,
    initials,
    name,
    roleBadge,
    shape = 'circle',
    size = 'lg',
    src,
    status,
    ...props
  },
  ref,
) {
  const content = initials ?? getInitials(name);
  const accessibleName = `${alt ?? name}${status ? `, ${status}` : ''}`;
  return (
    <span
      {...props}
      aria-label={accessibleName}
      className={clsx(
        'mosaic-avatar',
        `mosaic-avatar--${size}`,
        `mosaic-avatar--${shape}`,
        disabled && 'mosaic-avatar--disabled',
        className,
      )}
      ref={ref}
      role="img"
    >
      {src ? (
        <img alt="" className="mosaic-avatar__image" src={src} />
      ) : (
        <span aria-hidden="true" className="mosaic-avatar__initials">
          {content}
        </span>
      )}
      {status ? (
        <span
          aria-hidden="true"
          className={clsx('mosaic-avatar__status', `mosaic-avatar__status--${status}`)}
        />
      ) : null}
      {roleBadge ? <span className="mosaic-avatar__role">{roleBadge}</span> : null}
    </span>
  );
});
