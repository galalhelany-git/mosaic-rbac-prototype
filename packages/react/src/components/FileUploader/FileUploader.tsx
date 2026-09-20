import { forwardRef, useId, useRef, useState } from 'react';
import type { DragEvent, InputHTMLAttributes, KeyboardEvent, ReactNode } from 'react';
import clsx from 'clsx';

import { Progress } from '../Progress';
import { UploadIcon } from '../internal/Icons';

export interface FileUploaderProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
> {
  description?: ReactNode;
  label?: ReactNode;
  onFiles?: (files: File[]) => void;
  progress?: number;
  uploading?: boolean;
  variant?: 'base' | 'alternate';
}

export const FileUploader = forwardRef<HTMLInputElement, FileUploaderProps>(function FileUploader(
  {
    accept,
    className,
    description = 'Drag and drop files here, or browse',
    disabled = false,
    label = 'Upload files',
    multiple = false,
    onFiles,
    progress = 0,
    uploading = false,
    variant = 'base',
    ...props
  },
  forwardedRef,
) {
  const localRef = useRef<HTMLInputElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const id = useId();
  const setRef = (node: HTMLInputElement | null) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };
  const deliver = (list: FileList | null) => {
    if (list?.length) onFiles?.(Array.from(list));
  };
  const drop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    if (!disabled && !uploading) deliver(event.dataTransfer.files);
  };
  const keyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled && !uploading) {
      event.preventDefault();
      localRef.current?.click();
    }
  };
  return (
    <div className={clsx('mosaic-file-uploader-wrap', className)}>
      <input
        {...props}
        accept={accept}
        className="mosaic-visually-hidden"
        disabled={disabled || uploading}
        id={id}
        multiple={multiple}
        onChange={(event) => deliver(event.currentTarget.files)}
        ref={setRef}
        type="file"
      />
      <div
        aria-controls={id}
        aria-disabled={disabled || uploading}
        className={clsx(
          'mosaic-file-uploader',
          `mosaic-file-uploader--${variant}`,
          dragging && 'mosaic-file-uploader--dragging',
        )}
        onClick={() => !disabled && !uploading && localRef.current?.click()}
        onDragEnter={(event) => {
          event.preventDefault();
          if (!disabled && !uploading) setDragging(true);
        }}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setDragging(false);
        }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={drop}
        onKeyDown={keyboard}
        role="button"
        tabIndex={disabled || uploading ? -1 : 0}
      >
        <span aria-hidden="true" className="mosaic-file-uploader__icon">
          <UploadIcon />
        </span>
        <span className="mosaic-file-uploader__content">
          <strong>{label}</strong>
          <span>{uploading ? 'Uploading…' : description}</span>
        </span>
      </div>
      {uploading ? <Progress aria-label="Upload progress" value={progress} /> : null}
    </div>
  );
});
