import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { expectNoAccessibilityViolations } from '../test-utils';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { Checkbox } from './Checkbox';
import { CloseButton } from './CloseButton';
import { Divider } from './Divider';
import { IconButton } from './IconButton';
import { Progress } from './Progress';
import { Radio } from './Radio';
import { SearchField } from './SearchField';
import { StatusBadge } from './StatusBadge';
import { Switch } from './Switch';
import { Textarea } from './Textarea';

const Icon = () => <svg aria-hidden="true" />;

describe('Phase 4 primitives', () => {
  it('gives icon-only actions accessible names and native behavior', () => {
    const onClick = vi.fn();
    render(
      <>
        <IconButton aria-label="Notifications" icon={<Icon />} onClick={onClick} />
        <CloseButton />
      </>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Notifications' }));
    expect(onClick).toHaveBeenCalledOnce();
    expect(screen.getByRole('button', { name: 'Close' })).toBeEnabled();
  });

  it('uses native inputs for checkbox, radio, and switch', () => {
    render(
      <>
        <Checkbox indeterminate label="Terms" />
        <Radio label="Email" name="contact" />
        <Switch label="Alerts" />
      </>,
    );
    const checkbox = screen.getByRole('checkbox', { name: 'Terms' });
    expect(checkbox).toHaveProperty('indeterminate', true);
    fireEvent.click(screen.getByRole('radio', { name: 'Email' }));
    expect(screen.getByRole('radio', { name: 'Email' })).toBeChecked();
    fireEvent.click(screen.getByRole('switch', { name: 'Alerts' }));
    expect(screen.getByRole('switch', { name: 'Alerts' })).toBeChecked();
  });

  it('associates textarea feedback and preserves search semantics', () => {
    render(
      <>
        <Textarea errorMessage="Required" label="Notes" />
        <SearchField aria-label="Search customers" />
      </>,
    );
    expect(screen.getByRole('textbox', { name: 'Notes' })).toHaveAccessibleDescription('Required');
    expect(screen.getByRole('searchbox', { name: 'Search customers' })).toBeInTheDocument();
  });

  it('exposes progress and separator semantics', () => {
    render(
      <>
        <Progress aria-label="Upload" value={140} />
        <Divider orientation="vertical" />
      </>,
    );
    expect(screen.getByRole('progressbar', { name: 'Upload' })).toHaveAttribute(
      'aria-valuenow',
      '100',
    );
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders textual badge and avatar fallback content', () => {
    render(
      <>
        <Badge>Beta</Badge>
        <StatusBadge status="active" />
        <Avatar name="Ahmed Galal" />
      </>,
    );
    expect(screen.getByText('Beta')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Ahmed Galal' })).toHaveTextContent('AG');
  });

  it('has no detectable accessibility violations in the representative set', async () => {
    const { container } = render(
      <div>
        <IconButton aria-label="Settings" icon={<Icon />} />
        <Checkbox label="Terms" />
        <Radio label="Option" name="option" />
        <Switch label="Alerts" />
        <Textarea helpText="Optional" label="Notes" />
        <SearchField aria-label="Search" />
        <Progress aria-label="Progress" value={50} />
        <Avatar name="Ahmed Galal" />
      </div>,
    );
    await expectNoAccessibilityViolations(container);
  });
});
