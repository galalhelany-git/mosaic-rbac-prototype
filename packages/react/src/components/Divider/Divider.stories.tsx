import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';
const meta = {
  args: { orientation: 'horizontal', size: 'md', variant: 'solid' },
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          'Separates adjacent content. Horizontal dividers may include the text variant defined in Figma.',
      },
    },
  },
  title: 'Components/Containers/Divider',
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Dashed: Story = { args: { variant: 'dashed' } };
export const WithText: Story = { args: { label: 'Divider label' } };
export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [
    (Story) => (
      <div style={{ height: 160 }}>
        <Story />
      </div>
    ),
  ],
};
