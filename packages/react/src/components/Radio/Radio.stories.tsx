import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';
const meta = {
  args: { label: 'Radio label', name: 'choice' },
  component: Radio,
  parameters: {
    docs: {
      description: { component: 'A native radio control for choosing one option from a group.' },
    },
  },
  title: 'Components/Forms/Radio',
} satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Selected: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = { globals: { direction: 'rtl' } };
