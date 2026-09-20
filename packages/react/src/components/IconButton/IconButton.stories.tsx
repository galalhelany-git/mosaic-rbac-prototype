import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from './IconButton';

const Bell = () => (
  <svg fill="none" viewBox="0 0 24 24">
    <path
      d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);

const meta = {
  args: { 'aria-label': 'Notifications', icon: <Bell />, size: 'lg' },
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component:
          'A compact icon-only action. An accessible label is required and is independent of the decorative icon.',
      },
    },
  },
  title: 'Components/Actions/IconButton',
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Sizes: Story = {
  render: () => (
    <div className="story-row story-row--end">
      {(['lg', 'md', 'sm'] as const).map((size) => (
        <IconButton aria-label={`${size} notifications`} icon={<Bell />} key={size} size={size} />
      ))}
    </div>
  ),
};
export const Notification: Story = { args: { notification: 3 } };
export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = { args: { notification: 3 }, globals: { direction: 'rtl' } };
