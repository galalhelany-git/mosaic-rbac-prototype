import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { ButtonGroup } from './ButtonGroup';
const meta = {
  component: ButtonGroup,
  args: { children: null, label: 'View actions' },
  parameters: {
    docs: {
      description: {
        component:
          'Visually joins related actions while preserving each child button’s native behavior. Supply a concise group label for assistive technology.',
      },
    },
  },
  title: 'Components/Actions/Button Group',
} satisfies Meta<typeof ButtonGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Horizontal: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="sm">Day</Button>
      <Button size="sm" variant="ghost">
        Week
      </Button>
      <Button size="sm" variant="ghost">
        Month
      </Button>
    </ButtonGroup>
  ),
};
export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button size="sm">Edit</Button>
      <Button size="sm" variant="ghost">
        Duplicate
      </Button>
    </ButtonGroup>
  ),
};
export const RTL: Story = { globals: { direction: 'rtl' }, render: Horizontal.render };
