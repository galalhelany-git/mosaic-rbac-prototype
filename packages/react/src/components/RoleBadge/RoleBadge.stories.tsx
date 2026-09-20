import type { Meta, StoryObj } from '@storybook/react-vite';
import { RoleBadge, RoleBadgeCell } from './RoleBadge';
const meta = {
  component: RoleBadge,
  args: { role: 'super-admin', size: 32 },
  parameters: {
    docs: {
      description: {
        component:
          'A named role indicator using the exact Figma role artwork. RoleBadgeCell combines the icon with an optional visible role name.',
      },
    },
  },
  title: 'Components/Data Display/Role Badge',
} satisfies Meta<typeof RoleBadge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Roles: Story = {
  render: () => (
    <div className="story-row">
      {(['super-admin', 'system-admin', 'organization-admin', 'user'] as const).map((role) => (
        <RoleBadge key={role} role={role} />
      ))}
    </div>
  ),
};
export const Small: Story = { args: { size: 16 } };
export const Cells: Story = {
  render: () => (
    <div className="story-stack">
      {(['super-admin', 'system-admin', 'organization-admin', 'user'] as const).map((role) => (
        <RoleBadgeCell key={role} role={role} />
      ))}
    </div>
  ),
};
export const RTL: Story = { globals: { direction: 'rtl' }, render: Cells.render };
