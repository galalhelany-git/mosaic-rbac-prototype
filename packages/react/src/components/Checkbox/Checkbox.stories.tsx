import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  args: { label: 'Checkbox label' },
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'A native checkbox with checked, mixed, focus, and disabled visuals from Figma.',
      },
    },
  },
  title: 'Components/Forms/Checkbox',
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Indeterminate: Story = { args: { indeterminate: true } };
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = { globals: { direction: 'rtl' } };
