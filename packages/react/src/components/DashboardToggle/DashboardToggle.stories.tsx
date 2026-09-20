import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardToggle } from './DashboardToggle';
const options = [
  { label: 'Overview', value: 'overview' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Activity', value: 'activity' },
];
const meta = {
  component: DashboardToggle,
  args: { defaultValue: 'overview', options },
  parameters: {
    docs: {
      description: {
        component:
          'A single-select dashboard view switcher using radiogroup semantics and roving arrow-key focus.',
      },
    },
  },
  title: 'Components/Navigation/Dashboard Toggle',
} satisfies Meta<typeof DashboardToggle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const RTL: Story = { globals: { direction: 'rtl' } };
