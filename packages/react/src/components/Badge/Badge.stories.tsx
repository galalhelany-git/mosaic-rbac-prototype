import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
const meta = {
  args: { children: 'Badge', rounded: true, variant: 'default' },
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'A compact label for categories or metadata. It is non-interactive unless consumers deliberately add focusability and behavior.',
      },
    },
  },
  title: 'Components/Feedback/Badge',
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Variants: Story = {
  render: () => (
    <div className="story-row">
      {(['default', 'secondary', 'outline', 'error'] as const).map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
};
export const SquareCorners: Story = { args: { rounded: false } };
