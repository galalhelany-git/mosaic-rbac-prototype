import { forwardRef } from 'react';
import clsx from 'clsx';

import type { InputHTMLAttributes } from 'react';
import searchIcon from '../../assets/search.svg';

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  'aria-label': string;
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(function SearchField(
  { className, disabled = false, ...props },
  ref,
) {
  return (
    <div
      className={clsx(
        'mosaic-search-field',
        disabled && 'mosaic-search-field--disabled',
        className,
      )}
    >
      <input
        {...props}
        className="mosaic-search-field__control"
        disabled={disabled}
        ref={ref}
        type="search"
      />
      <span aria-hidden="true" className="mosaic-search-field__icon">
        <img alt="" src={searchIcon} />
      </span>
    </div>
  );
});
