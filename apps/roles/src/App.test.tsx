import { fireEvent, render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it } from 'vitest';

import { App } from './App';

describe('Roles app', () => {
  it('filters the roles table with the design-system search field', () => {
    render(<App />);

    fireEvent.change(screen.getByRole('searchbox', { name: 'Search roles' }), {
      target: { value: 'Penetration' },
    });

    expect(screen.getByRole('rowheader', { name: 'Penetration Tester' })).not.toBeNull();
    expect(screen.queryByRole('rowheader', { name: 'Cloud Security Specialist' })).toBeNull();
  });

  it('expands on hover, pins with the green arrows, and collapses when unpinned', () => {
    const { container } = render(<App />);
    const shell = container.querySelector('.app-shell');
    const sidebar = container.querySelector('.app-sidebar');

    if (!shell || !sidebar) throw new Error('Expected the app shell and sidebar');

    expect(shell.getAttribute('data-sidebar-mode')).toBe('collapsed');
    expect(screen.getByRole('button', { name: 'Pin sidebar' })).not.toBeNull();

    fireEvent.mouseMove(sidebar);
    expect(shell.getAttribute('data-sidebar-mode')).toBe('expanded');
    expect(screen.queryByRole('button', { name: 'Pin sidebar' })).toBeNull();

    fireEvent.mouseLeave(sidebar);
    expect(shell.getAttribute('data-sidebar-mode')).toBe('collapsed');

    fireEvent.click(screen.getByRole('button', { name: 'Pin sidebar' }));
    expect(shell.getAttribute('data-sidebar-mode')).toBe('pinned');
    expect(screen.getByRole('navigation', { name: 'Pinned navigation' })).not.toBeNull();

    fireEvent.mouseLeave(sidebar);
    expect(shell.getAttribute('data-sidebar-mode')).toBe('pinned');

    fireEvent.click(screen.getByRole('button', { name: 'Unpin sidebar' }));
    expect(shell.getAttribute('data-sidebar-mode')).toBe('collapsed');
  });

  it('opens Create New Role as a full page and supports assigning a user', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'Create New Role' }));

    expect(screen.getByRole('heading', { name: 'Create New Role' })).not.toBeNull();
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(screen.getByRole('region', { name: 'Role permissions' })).not.toBeNull();

    fireEvent.click(screen.getByRole('button', { name: 'Select...' }));
    fireEvent.change(screen.getByRole('searchbox', { name: 'Search users' }), {
      target: { value: 'Vivian' },
    });
    fireEvent.click(screen.getByRole('option', { name: 'Vivian Keebler' }));

    expect(screen.getByRole('cell', { name: /Vivian Keebler/ })).not.toBeNull();
    expect(screen.getByRole('button', { name: 'Remove Vivian Keebler' })).not.toBeNull();
  });

  it('expands and enables a complete permission group', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Create New Role' }));

    const firstGroup = screen.getAllByRole('button', { name: 'System Management' })[0];
    if (!firstGroup) throw new Error('Expected the first permission group');
    fireEvent.click(firstGroup);
    fireEvent.click(screen.getAllByRole('switch')[0]!);

    expect(
      (screen.getByRole('checkbox', { name: 'Manage System Admins' }) as HTMLInputElement).checked,
    ).toBe(true);
    expect(
      (screen.getByRole('checkbox', { name: 'View Removed Organizations' }) as HTMLInputElement)
        .checked,
    ).toBe(true);
    expect(
      (screen.getByRole('checkbox', { name: 'Restore Removed Organizations' }) as HTMLInputElement)
        .checked,
    ).toBe(true);
  });

  it('has no detectable automated accessibility violations', async () => {
    const { container } = render(<App />);
    const result = await axe.run(container, {
      rules: { 'color-contrast': { enabled: false } },
    });

    expect(result.violations).toEqual([]);
  });
});
