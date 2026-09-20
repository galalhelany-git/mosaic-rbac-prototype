import type { Meta, StoryObj } from '@storybook/react-vite';
import { CloseButton } from './CloseButton';

const meta = {
  component: CloseButton,
  parameters: {
    docs: {
      description: {
        component:
          'Dismisses a surface or removable item. Selected mirrors the red selected state in Figma.',
      },
    },
  },
  title: 'Components/Actions/CloseButton',
} satisfies Meta<typeof CloseButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Sizes: Story = {
  render: () => (
    <div className="story-row story-row--end">
      {(['lg', 'md', 'sm'] as const).map((size) => (
        <CloseButton key={size} size={size} />
      ))}
    </div>
  ),
};
