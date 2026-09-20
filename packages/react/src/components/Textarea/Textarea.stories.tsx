import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';
const meta = {
  args: {
    helpText: 'Supporting text for this field.',
    label: 'Label',
    placeholder: 'Textarea text',
  },
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'A multi-line native text field with associated label, help, error, and optional count.',
      },
    },
  },
  title: 'Components/Forms/Textarea',
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Filled: Story = { args: { defaultValue: 'Existing content' } };
export const Counter: Story = { args: { counter: true, defaultValue: 'Mosaic', maxLength: 100 } };
export const Error: Story = {
  args: { errorMessage: 'This field has an error.', helpText: undefined },
};
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = {
  args: { defaultValue: 'محتوى عربي', helpText: 'نص مساعد', label: 'التسمية' },
  globals: { direction: 'rtl' },
};
