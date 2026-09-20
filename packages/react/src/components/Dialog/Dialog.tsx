import { forwardRef, useEffect, useId, useRef } from 'react';
import type { DialogHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import { CloseIcon } from '../internal/Icons';

export interface DialogHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  align?: 'start' | 'center';
  description?: ReactNode;
  padding?: 0 | 16 | 24;
  size?: 'sm' | 'md' | 'lg';
  title: ReactNode;
  titleId?: string;
}

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(function DialogHeader(
  { align = 'start', className, description, padding = 24, size = 'lg', title, titleId, ...props },
  ref,
) {
  return (
    <div
      {...props}
      className={clsx(
        'mosaic-dialog__header',
        `mosaic-dialog__header--${align}`,
        `mosaic-dialog__header--${size}`,
        className,
      )}
      ref={ref}
      style={{ padding }}
    >
      <div className="mosaic-dialog__title" id={titleId}>
        {title}
      </div>
      {description ? <div className="mosaic-dialog__description">{description}</div> : null}
    </div>
  );
});

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'end' | 'split';
  fullWidth?: boolean;
  padding?: 0 | 16 | 24;
}

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(function DialogFooter(
  { align = 'end', children, className, fullWidth = false, padding = 24, ...props },
  ref,
) {
  return (
    <div
      {...props}
      className={clsx(
        'mosaic-dialog__footer',
        `mosaic-dialog__footer--${align}`,
        fullWidth && 'mosaic-dialog__footer--full',
        className,
      )}
      ref={ref}
      style={{ padding }}
    >
      {children}
    </div>
  );
});

export interface DialogProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  'open' | 'title'
> {
  children: ReactNode;
  closeLabel?: string;
  description?: ReactNode;
  footer?: ReactNode;
  onOpenChange?: (open: boolean) => void;
  open: boolean;
  showCloseButton?: boolean;
  size?: 'default' | 'full';
  title: ReactNode;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(function Dialog(
  {
    children,
    className,
    closeLabel = 'Close dialog',
    description,
    footer,
    onCancel,
    onOpenChange,
    open,
    showCloseButton = true,
    size = 'default',
    title,
    ...props
  },
  forwardedRef,
) {
  const localRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();
  const setRef = (node: HTMLDialogElement | null) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };
  useEffect(() => {
    const dialog = localRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    } else if (!open && dialog.open) {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    }
  }, [open]);

  return (
    <dialog
      {...props}
      aria-labelledby={titleId}
      className={clsx('mosaic-dialog', `mosaic-dialog--${size}`, className)}
      onCancel={(event) => {
        onCancel?.(event);
        if (!event.defaultPrevented) onOpenChange?.(false);
      }}
      ref={setRef}
    >
      {showCloseButton ? (
        <button
          aria-label={closeLabel}
          className="mosaic-dialog__close"
          onClick={() => onOpenChange?.(false)}
          type="button"
        >
          <CloseIcon />
        </button>
      ) : null}
      <DialogHeader description={description} padding={24} title={title} titleId={titleId} />
      <div className="mosaic-dialog__body">{children}</div>
      {footer ? <DialogFooter>{footer}</DialogFooter> : null}
    </dialog>
  );
});
