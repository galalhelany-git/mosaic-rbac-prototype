import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Avatar } from './Avatar';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { Calendar } from './Calendar';
import { CloseButton } from './CloseButton';
import { Dialog } from './Dialog';
import { FileUploader } from './FileUploader';
import { Pagination } from './Pagination';
import { SearchField } from './SearchField';
import { Sidebar, SidebarItem } from './Sidebar';
import { Textarea } from './Textarea';
import { Toast, ToastViewport } from './Toast';
import { TopNavigation } from './TopNavigation';

describe('Phase 7 quality boundaries', () => {
  it('labels button groups and preserves their requested orientation', () => {
    render(
      <ButtonGroup label="View options" orientation="vertical">
        <Button>Grid</Button>
        <Button>List</Button>
      </ButtonGroup>,
    );

    const group = screen.getByRole('group', { name: 'View options' });
    expect(group).toHaveClass('mosaic-button-group--vertical');
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('exposes selected close-button semantics and custom labels', () => {
    render(<CloseButton aria-label="Remove attachment" selected />);

    expect(screen.getByRole('button', { name: 'Remove attachment' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('renders textarea limits and supporting feedback as one field contract', () => {
    render(
      <Textarea
        counter
        defaultValue="Mosaic"
        helpText="Keep it concise"
        label="Summary"
        maxLength={20}
      />,
    );

    const textarea = screen.getByRole('textbox', { name: 'Summary' });
    expect(textarea).toHaveAttribute('maxlength', '20');
    expect(textarea).toHaveAccessibleDescription('Keep it concise');
    expect(screen.getByText('6/20')).toHaveAttribute('aria-live', 'polite');
  });

  it('keeps disabled search controls and avatar status accessible', () => {
    render(
      <>
        <SearchField aria-label="Search people" disabled />
        <Avatar name="Ahmed Galal" status="online" />
      </>,
    );

    expect(screen.getByRole('searchbox', { name: 'Search people' })).toBeDisabled();
    expect(screen.getByRole('img', { name: 'Ahmed Galal, online' })).toHaveTextContent('AG');
  });

  it('clamps pagination input and supports localized control labels', () => {
    const onPageChange = vi.fn();
    render(
      <Pagination
        currentPage={99}
        label="نتائج البحث"
        nextAriaLabel="الصفحة التالية"
        nextLabel="التالي"
        onPageChange={onPageChange}
        pageLabel={(page) => `الصفحة ${page}`}
        previousAriaLabel="الصفحة السابقة"
        previousLabel="السابق"
        totalPages={8}
      />,
    );

    expect(screen.getByRole('navigation', { name: 'نتائج البحث' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'الصفحة 8' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('button', { name: 'الصفحة التالية' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'الصفحة السابقة' }));
    expect(onPageChange).toHaveBeenCalledWith(7);
  });

  it('exposes the top-navigation and sidebar landmark contracts', () => {
    const onCollapsedChange = vi.fn();
    render(
      <>
        <TopNavigation
          brand={<a href="#home">Mosaic</a>}
          navigation={<a href="#projects">Projects</a>}
          navigationLabel="Main navigation"
        />
        <Sidebar onCollapsedChange={onCollapsedChange}>
          <SidebarItem href="#overview" label="Overview" />
        </Sidebar>
      </>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Sidebar' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Collapse sidebar' }));
    expect(onCollapsedChange).toHaveBeenCalledWith(true);
  });

  it('routes dialog close and native cancel requests through controlled state', async () => {
    const onOpenChange = vi.fn();
    render(
      <Dialog onOpenChange={onOpenChange} open title="Confirm change">
        Review this action.
      </Dialog>,
    );

    const dialog = await screen.findByRole('dialog', { name: 'Confirm change' });
    expect(dialog).toHaveTextContent('Review this action.');
    fireEvent.click(screen.getByRole('button', { name: 'Close dialog' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);

    onOpenChange.mockClear();
    fireEvent(dialog, new Event('cancel', { bubbles: false, cancelable: true }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('wires notification actions, dismissal, and viewport state', () => {
    const onAction = vi.fn();
    const onDismiss = vi.fn();
    render(
      <ToastViewport expanded={false} label="Recent notifications">
        <Toast
          actionLabel="Undo"
          onAction={onAction}
          onDismiss={onDismiss}
          title="Project archived"
        />
      </ToastViewport>,
    );

    expect(screen.getByRole('region', { name: 'Recent notifications' })).toHaveClass(
      'mosaic-toast-viewport--stacked',
    );
    fireEvent.click(screen.getByRole('button', { name: 'Undo' }));
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss notification' }));
    expect(onAction).toHaveBeenCalledOnce();
    expect(onDismiss).toHaveBeenCalledOnce();
  });

  it('skips disabled calendar days during keyboard navigation', async () => {
    render(
      <Calendar
        disabledDate={(date) =>
          date.getFullYear() === 2024 && date.getMonth() === 9 && date.getDate() === 18
        }
        month={new Date(2024, 9, 1)}
      />,
    );

    const october17 = screen.getByRole('gridcell', { name: /October 17, 2024/i });
    october17.focus();
    fireEvent.keyDown(october17, { key: 'ArrowRight' });
    await waitFor(() =>
      expect(screen.getByRole('gridcell', { name: /October 19, 2024/i })).toHaveFocus(),
    );
  });

  it('ignores dropped files while the uploader is disabled', () => {
    const onFiles = vi.fn();
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
    render(<FileUploader disabled onFiles={onFiles} />);

    const dropzone = screen.getByRole('button', { name: /Upload files/i });
    expect(dropzone).toHaveAttribute('aria-disabled', 'true');
    expect(dropzone).toHaveAttribute('tabindex', '-1');
    fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });
    expect(onFiles).not.toHaveBeenCalled();
  });
});
