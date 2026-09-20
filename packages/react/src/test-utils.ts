import axe from 'axe-core';

export async function expectNoAccessibilityViolations(container: Element): Promise<void> {
  const result = await axe.run(container, {
    // jsdom has no layout/canvas engine, so contrast is verified visually in Storybook.
    rules: { 'color-contrast': { enabled: false } },
  });

  if (result.violations.length > 0) {
    const summary = result.violations
      .map((violation) => `${violation.id}: ${violation.help}`)
      .join('\n');
    throw new Error(`Accessibility violations found:\n${summary}`);
  }
}
