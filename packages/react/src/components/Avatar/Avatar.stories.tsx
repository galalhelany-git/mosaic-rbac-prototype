import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
const Shield = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const meta = {
  args: { name: 'Ahmed Galal', shape: 'circle', size: 'lg' },
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Represents a person with an image or initials fallback. Status and role overlays correspond to Figma badge properties.',
      },
    },
  },
  title: 'Components/Data Display/Avatar',
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Sizes: Story = {
  render: () => (
    <div className="story-row story-row--end">
      {(['xl', 'lg', 'md', 'sm', 'xs'] as const).map((size) => (
        <Avatar key={size} name="Ahmed Galal" size={size} />
      ))}
    </div>
  ),
};
export const Shapes: Story = {
  render: () => (
    <div className="story-row">
      {(['circle', 'rounded', 'square'] as const).map((shape) => (
        <Avatar key={shape} name="Ahmed Galal" shape={shape} />
      ))}
    </div>
  ),
};
export const Status: Story = { args: { status: 'online' } };
export const RoleBadge: Story = { args: { roleBadge: <Shield /> } };
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = {
  args: { name: 'أحمد جلال', status: 'online' },
  globals: { direction: 'rtl' },
};
