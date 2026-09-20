import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';
const meta = {
  args: { label: 'Switch label', size: 'md' },
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'A native checkbox exposed as a switch. Figma supplies medium and small sizes; mixed is retained for parity.',
      },
    },
  },
  title: 'Components/Forms/Switch',
} satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const On: Story = { args: { defaultChecked: true } };
export const Intermediate: Story = { args: { indeterminate: true } };
export const Small: Story = { args: { size: 'sm' } };
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = { args: { defaultChecked: true }, globals: { direction: 'rtl' } };
