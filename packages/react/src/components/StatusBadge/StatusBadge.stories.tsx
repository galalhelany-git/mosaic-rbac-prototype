import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBadge } from './StatusBadge';
const meta = {
  args: { status: 'active' },
  component: StatusBadge,
  parameters: {
    docs: {
      description: {
        component:
          'A text status indicator. Color reinforces—but never replaces—the visible status label.',
      },
    },
  },
  title: 'Components/Feedback/StatusBadge',
} satisfies Meta<typeof StatusBadge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const AllStatuses: Story = {
  render: () => (
    <div className="story-row">
      {(['active', 'inactive', 'pending', 'suspended', 'expired'] as const).map((status) => (
        <StatusBadge key={status} status={status} />
      ))}
    </div>
  ),
};
