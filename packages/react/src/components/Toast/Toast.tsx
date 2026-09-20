import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import { CloseIcon } from '../internal/Icons';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  actionLabel?: string;
  description?: ReactNode;
  dismissLabel?: string;
  error?: boolean;
  leading?: ReactNode;
  onAction?: () => void;
  onDismiss?: () => void;
  title: ReactNode;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  {
    actionLabel,
    className,
    description,
    dismissLabel = 'Dismiss notification',
    error = false,
    leading,
    onAction,
    onDismiss,
    title,
    ...props
  },
  ref,
) {
  return (
    <div
      {...props}
      aria-atomic="true"
      className={clsx('mosaic-toast', error && 'mosaic-toast--error', className)}
      ref={ref}
      role={error ? 'alert' : 'status'}
    >
      {leading ? (
        <span aria-hidden="true" className="mosaic-snackbar__icon">
          {leading}
        </span>
      ) : null}
      <div className="mosaic-toast__content">
        <div className="mosaic-toast__title">{title}</div>
        {description ? <div className="mosaic-toast__description">{description}</div> : null}
      </div>
      {actionLabel ? (
        <button className="mosaic-toast__action" onClick={onAction} type="button">
          {actionLabel}
        </button>
      ) : null}
      {onDismiss ? (
        <button
          aria-label={dismissLabel}
          className="mosaic-toast__dismiss"
          onClick={onDismiss}
          type="button"
        >
          <CloseIcon />
        </button>
      ) : null}
    </div>
  );
});

export interface SnackbarProps extends Omit<ToastProps, 'leading'> {
  icon?: ReactNode;
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(
  { className, icon, ...props },
  ref,
) {
  return (
    <Toast {...props} className={clsx('mosaic-snackbar', className)} leading={icon} ref={ref} />
  );
});

export interface ToastViewportProps extends HTMLAttributes<HTMLDivElement> {
  expanded?: boolean;
  label?: string;
}

export const ToastViewport = forwardRef<HTMLDivElement, ToastViewportProps>(function ToastViewport(
  { children, className, expanded = true, label = 'Notifications', ...props },
  ref,
) {
  return (
    <div
      {...props}
      aria-label={label}
      className={clsx(
        'mosaic-toast-viewport',
        expanded ? 'mosaic-toast-viewport--expanded' : 'mosaic-toast-viewport--stacked',
        className,
      )}
      ref={ref}
      role="region"
    >
      {children}
    </div>
  );
});
