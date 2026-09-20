import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';
const meta = {
  args: { 'aria-label': 'Upload progress', size: 'md', value: 40 },
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          'A determinate progress indicator. Values are clamped to the supplied range and exposed to assistive technology.',
      },
    },
  },
  title: 'Components/Feedback/Progress',
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Sizes: Story = {
  render: () => (
    <div className="story-stack">
      {(['lg', 'md', 'sm', 'xs'] as const).map((size) => (
        <Progress aria-label={`${size} progress`} key={size} size={size} value={60} />
      ))}
    </div>
  ),
};
export const RTL: Story = { globals: { direction: 'rtl' } };
