import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { expectNoAccessibilityViolations } from '../test-utils';
import { Accordion } from './Accordion';
import { Breadcrumb } from './Breadcrumb';
import { Calendar } from './Calendar';
import { DashboardToggle } from './DashboardToggle';
import { DatePicker } from './DatePicker';
import { FileUploader } from './FileUploader';
import { Pagination } from './Pagination';
import { RoleBadge, RoleBadgeCell } from './RoleBadge';
import { Sidebar, SidebarItem } from './Sidebar';
import { Tabs } from './Tabs';
import { TimePicker } from './TimePicker';
import { Snackbar, Toast } from './Toast';
import { Tooltip } from './Tooltip';

const tabs = [
  { id: 'overview', label: 'Overview', panel: 'Overview panel' },
  { id: 'activity', label: 'Activity', panel: 'Activity panel' },
];

describe('Phase 5 composites', () => {
  it('opens the accordion and exposes its panel relationship', () => {
    render(<Accordion title="Details">Expanded content</Accordion>);
    const trigger = screen.getByRole('button', { name: 'Details' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Expanded content')).toBeVisible();
  });

  it('supports tabs click and directional-key selection', () => {
    render(<Tabs tabs={tabs} />);
    const overview = screen.getByRole('tab', { name: 'Overview' });
    const activity = screen.getByRole('tab', { name: 'Activity' });
    overview.focus();
    fireEvent.keyDown(overview, { key: 'ArrowRight' });
    expect(activity).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Activity panel');
  });

  it('mirrors horizontal tab keys in RTL', () => {
    render(
      <div dir="rtl">
        <Tabs tabs={tabs} />
      </div>,
    );
    const overview = screen.getByRole('tab', { name: 'Overview' });
    fireEvent.keyDown(overview, { key: 'ArrowLeft' });
    expect(screen.getByRole('tab', { name: 'Activity' })).toHaveAttribute('aria-selected', 'true');
  });

  it('bounds pagination and reports the current page', () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={1} onPageChange={onPageChange} totalPages={8} />);
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page');
    fireEvent.click(screen.getByRole('button', { name: 'Next page' }));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('exposes navigation landmarks and current locations', () => {
    render(
      <>
        <Breadcrumb items={[{ href: '#home', label: 'Home' }, { label: 'Settings' }]} />
        <Sidebar>
          <SidebarItem active href="#dashboard" label="Dashboard" />
        </Sidebar>
      </>,
    );
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
    expect(screen.getByText('Settings')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute('aria-current', 'page');
  });

  it('selects calendar dates and date-picker values', () => {
    const onChange = vi.fn();
    render(<Calendar month={new Date(2024, 9, 1)} onChange={onChange} />);
    fireEvent.click(screen.getByRole('gridcell', { name: /October 17, 2024/i }));
    expect(onChange).toHaveBeenCalled();

    render(<DatePicker label="Start date" />);
    fireEvent.click(screen.getByRole('button', { name: /Select date/i }));
    const dateDialog = screen.getByRole('dialog', { name: 'Start date' });
    expect(dateDialog).toBeInTheDocument();
    expect(dateDialog.querySelector('[role="gridcell"][tabindex="0"]')).toHaveFocus();
    fireEvent.keyDown(dateDialog, { key: 'Escape' });
    expect(screen.getByRole('button', { name: 'Start date: Select date' })).toHaveFocus();
  });

  it('moves calendar focus with grid keyboard commands', () => {
    render(<Calendar month={new Date(2024, 9, 1)} />);
    const day = screen.getByRole('gridcell', { name: /October 17, 2024/i });
    day.focus();
    fireEvent.keyDown(day, { key: 'ArrowRight' });
    expect(screen.getByRole('gridcell', { name: /October 18, 2024/i })).toHaveFocus();
  });

  it('selects a time option', () => {
    const onValueChange = vi.fn();
    render(
      <TimePicker
        end="10:00"
        label="Meeting time"
        onValueChange={onValueChange}
        start="09:00"
        step={30}
      />,
    );
    const trigger = screen.getByRole('button', { name: 'Meeting time: Select time' });
    fireEvent.click(trigger);
    expect(screen.getByRole('option', { name: '09:00' })).toHaveFocus();
    fireEvent.keyDown(screen.getByRole('option', { name: '09:00' }), { key: 'ArrowDown' });
    expect(screen.getByRole('option', { name: '09:30' })).toHaveFocus();
    fireEvent.click(screen.getByRole('option', { name: '09:30' }));
    expect(onValueChange).toHaveBeenCalledWith('09:30');
    expect(trigger).toHaveFocus();
  });

  it('passes dropped files through the uploader contract', () => {
    const onFiles = vi.fn();
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
    render(<FileUploader onFiles={onFiles} />);
    fireEvent.drop(screen.getByRole('button', { name: /Upload files/i }), {
      dataTransfer: { files: [file] },
    });
    expect(onFiles).toHaveBeenCalledWith([file]);
  });

  it('exposes transient feedback semantics and tooltip content', () => {
    render(
      <>
        <Toast title="Saved" />
        <Snackbar error title="Failed" />
        <Tooltip content="More information">
          <button type="button">Info</button>
        </Tooltip>
      </>,
    );
    expect(screen.getByRole('status')).toHaveTextContent('Saved');
    expect(screen.getByRole('alert')).toHaveTextContent('Failed');
    fireEvent.mouseEnter(screen.getByRole('button', { name: 'Info' }));
    expect(screen.getByRole('tooltip')).toHaveTextContent('More information');
    fireEvent.keyDown(screen.getByRole('button', { name: 'Info' }), { key: 'Escape' });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('supports controlled dashboard selection and semantic role badges', () => {
    const onValueChange = vi.fn();
    render(
      <>
        <DashboardToggle
          onValueChange={onValueChange}
          options={[
            { label: 'Overview', value: 'overview' },
            { label: 'Activity', value: 'activity' },
          ]}
        />
        <RoleBadge role="super-admin" />
        <RoleBadgeCell role="user" />
      </>,
    );
    fireEvent.click(screen.getByRole('radio', { name: 'Activity' }));
    expect(onValueChange).toHaveBeenCalledWith('activity');
    fireEvent.keyDown(screen.getByRole('radio', { name: 'Activity' }), { key: 'ArrowLeft' });
    expect(screen.getByRole('radio', { name: 'Overview' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('img', { name: 'Super Admin' })).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
  });

  it('has no detectable accessibility violations in representative composites', async () => {
    const { container } = render(
      <div>
        <Accordion defaultOpen title="Details">
          Content
        </Accordion>
        <Breadcrumb items={[{ href: '#home', label: 'Home' }, { label: 'Current' }]} />
        <Tabs tabs={tabs} />
        <Pagination currentPage={2} onPageChange={() => undefined} totalPages={3} />
        <RoleBadge role="system-admin" />
      </div>,
    );
    await expectNoAccessibilityViolations(container);
  });
});
