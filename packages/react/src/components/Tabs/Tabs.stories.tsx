import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';
const tabs = [
  { id: 'overview', label: 'Overview', panel: 'Overview content' },
  { id: 'activity', label: 'Activity', panel: 'Activity content' },
  { id: 'settings', label: 'Settings', panel: 'Settings content' },
];
const meta = {
  component: Tabs,
  args: { tabs },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
    type: { control: 'inline-radio', options: ['default', 'line'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Horizontal or vertical tabs with pill and line visuals, roving focus, disabled tabs, and RTL-aware arrow keys.',
      },
    },
  },
  title: 'Components/Navigation/Tabs',
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Line: Story = { args: { type: 'line' } };
export const Vertical: Story = { args: { orientation: 'vertical' } };
export const Stretch: Story = { args: { stretch: true } };
export const RTL: Story = { globals: { direction: 'rtl' } };
