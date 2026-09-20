import { forwardRef } from 'react';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  Ref,
} from 'react';
import clsx from 'clsx';

import { ChevronIcon } from '../internal/Icons';

type CommonSidebarItemProps = {
  active?: boolean;
  badge?: ReactNode;
  collapsed?: boolean;
  icon?: ReactNode;
  label: string;
  trailingIcon?: ReactNode;
};
type SidebarItemAnchorProps = CommonSidebarItemProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type SidebarItemButtonProps = CommonSidebarItemProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
export type SidebarItemProps = SidebarItemAnchorProps | SidebarItemButtonProps;

export const SidebarItem = forwardRef<HTMLAnchorElement | HTMLButtonElement, SidebarItemProps>(
  function SidebarItem(
    { active = false, badge, className, collapsed = false, icon, label, trailingIcon, ...props },
    ref,
  ) {
    const content = (
      <>
        <span className="mosaic-sidebar-item__main">
          {icon ? (
            <span aria-hidden="true" className="mosaic-sidebar-item__icon">
              {icon}
            </span>
          ) : null}
          {!collapsed ? <span>{label}</span> : null}
        </span>
        {!collapsed && (badge || trailingIcon) ? (
          <span className="mosaic-sidebar-item__end">
            {badge}
            {trailingIcon}
          </span>
        ) : null}
      </>
    );
    const classes = clsx(
      'mosaic-sidebar-item',
      collapsed && 'mosaic-sidebar-item--collapsed',
      active && 'mosaic-sidebar-item--active',
      className,
    );
    if ('href' in props && props.href)
      return (
        <a
          {...props}
          aria-current={active ? 'page' : undefined}
          aria-label={collapsed ? label : undefined}
          className={classes}
          ref={ref as Ref<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    return (
      <button
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        aria-pressed={active || undefined}
        aria-label={collapsed ? label : undefined}
        className={classes}
        ref={ref as Ref<HTMLButtonElement>}
        type={(props as ButtonHTMLAttributes<HTMLButtonElement>).type ?? 'button'}
      >
        {content}
      </button>
    );
  },
);

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  collapseLabel?: string;
  expandLabel?: string;
  footer?: ReactNode;
  header?: ReactNode;
  navigationLabel?: string;
  onCollapsedChange?: (collapsed: boolean) => void;
  pinned?: boolean;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(function Sidebar(
  {
    children,
    className,
    collapsed = false,
    collapseLabel = 'Collapse sidebar',
    expandLabel = 'Expand sidebar',
    footer,
    header,
    navigationLabel = 'Sidebar',
    onCollapsedChange,
    pinned = false,
    ...props
  },
  ref,
) {
  return (
    <aside
      {...props}
      className={clsx(
        'mosaic-sidebar',
        collapsed && 'mosaic-sidebar--collapsed',
        pinned && 'mosaic-sidebar--pinned',
        className,
      )}
      ref={ref}
    >
      {header ? <div className="mosaic-sidebar__header">{header}</div> : null}
      <nav aria-label={navigationLabel} className="mosaic-sidebar__nav">
        {children}
      </nav>
      <div className="mosaic-sidebar__footer">
        {footer}
        {onCollapsedChange ? (
          <button
            aria-label={collapsed ? expandLabel : collapseLabel}
            className="mosaic-sidebar__collapse"
            onClick={() => onCollapsedChange(!collapsed)}
            type="button"
          >
            <ChevronIcon direction={collapsed ? 'right' : 'left'} />
            {!collapsed ? <span>{collapseLabel}</span> : null}
          </button>
        ) : null}
      </div>
    </aside>
  );
});
