import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';
const meta = {
  component: Tooltip,
  args: { children: <Button>Hover or focus</Button>, content: 'Helpful context', placement: 'top' },
  parameters: {
    docs: {
      description: {
        component:
          'Supplementary text shown on hover and keyboard focus. The trigger receives `aria-describedby`; Escape dismisses the tooltip. Do not place essential or interactive content inside.',
      },
    },
  },
  title: 'Components/Feedback/Tooltip',
} satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Placements: Story = {
  render: () => (
    <div className="story-row" style={{ padding: 100 }}>
      {(['top', 'right', 'bottom', 'left'] as const).map((placement) => (
        <Tooltip content={placement} key={placement} placement={placement}>
          <Button size="sm" variant="ghost">
            {placement}
          </Button>
        </Tooltip>
      ))}
    </div>
  ),
};
export const RTL: Story = {
  args: { children: <Button>معلومات</Button>, content: 'معلومات إضافية', placement: 'right' },
  globals: { direction: 'rtl' },
};
