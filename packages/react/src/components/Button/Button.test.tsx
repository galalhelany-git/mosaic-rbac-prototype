import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { expectNoAccessibilityViolations } from '../../test-utils';
import { Button } from './Button';

describe('Button', () => {
  it('renders a named native button and handles activation', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Continue</Button>);

    const button = screen.getByRole('button', { name: 'Continue' });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledOnce();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('prevents activation while disabled', () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Continue
      </Button>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('keeps its accessible name and exposes busy state while loading', () => {
    render(<Button loading>Save changes</Button>);

    const button = screen.getByRole('button', { name: 'Save changes' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<Button>Continue</Button>);
    await expectNoAccessibilityViolations(container);
  });
});
