import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { expectNoAccessibilityViolations } from '../../test-utils';
import { Input } from './Input';

describe('Input', () => {
  it('associates its visible label and supporting text', () => {
    render(
      <Input helpText="Use your work address." label="Email" placeholder="name@example.com" />,
    );

    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toHaveAccessibleDescription('Use your work address.');
  });

  it('associates and announces an error', () => {
    render(<Input errorMessage="Email is required." label="Email" />);

    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('Email is required.');
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required.');
  });

  it('passes disabled semantics to the native input', () => {
    render(<Input disabled label="Email" />);
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDisabled();
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<Input helpText="Supporting text." label="Name" />);
    await expectNoAccessibilityViolations(container);
  });
});
