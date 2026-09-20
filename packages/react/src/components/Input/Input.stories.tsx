import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { Input } from './Input';

const meta = {
  args: {
    helpText: 'Supporting text for this field.',
    label: 'Label',
    placeholder: 'Input text',
  },
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Use Input for text or file entry. A visible label is required; help and error messages are automatically associated with the native input.',
      },
    },
  },
  title: 'Components/Forms/Input',
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithAction: Story = {
  args: { action: <Button size="sm">Button text</Button> },
};

export const Error: Story = {
  args: { errorMessage: 'Enter a valid value.', helpText: undefined },
};

export const Counter: Story = {
  args: { counter: true, defaultValue: 'Mosaic', maxLength: 24 },
};

export const Horizontal: Story = {
  args: { horizontal: true },
};

export const File: Story = {
  args: { helpText: 'Choose one file.', type: 'file' },
};

export const Disabled: Story = {
  args: { defaultValue: 'Unavailable value', disabled: true },
};

export const RTL: Story = {
  args: { defaultValue: 'قيمة الإدخال', helpText: 'نص مساعد للحقل.', label: 'التسمية' },
  globals: { direction: 'rtl' },
};
