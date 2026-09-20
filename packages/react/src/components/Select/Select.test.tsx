import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { expectNoAccessibilityViolations } from '../../test-utils';
import { Select } from './Select';

const options = (
  <>
    <option value="draft">Draft</option>
    <option value="published">Published</option>
  </>
);

describe('Select', () => {
  it('uses a labelled native select and changes value', () => {
    render(<Select label="Status">{options}</Select>);
    const select = screen.getByRole('combobox', { name: 'Status' });

    fireEvent.change(select, { target: { value: 'published' } });

    expect(select).toHaveValue('published');
  });

  it('associates help and error messages', () => {
    render(
      <Select errorMessage="Choose a status." helpText="Required field." label="Status">
        {options}
      </Select>,
    );

    const select = screen.getByRole('combobox', { name: 'Status' });
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select).toHaveAccessibleDescription('Required field. Choose a status.');
  });

  it('passes disabled semantics to the native select', () => {
    render(
      <Select disabled label="Status">
        {options}
      </Select>,
    );
    expect(screen.getByRole('combobox', { name: 'Status' })).toBeDisabled();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(
      <Select helpText="Choose one." label="Status">
        {options}
      </Select>,
    );
    await expectNoAccessibilityViolations(container);
  });
});
