import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';
const meta = {
  component: Accordion,
  args: {
    title: 'What is Mosaic?',
    children: 'Mosaic is the shared design language for product teams.',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A controlled or uncontrolled disclosure with native heading and button semantics. Enter and Space toggle it; `aria-expanded` and `aria-controls` expose state.',
      },
    },
  },
  title: 'Components/Data Display/Accordion',
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Open: Story = { args: { defaultOpen: true } };
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = { globals: { direction: 'rtl' } };
