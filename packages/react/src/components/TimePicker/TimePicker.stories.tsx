import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker } from './TimePicker';
const meta = {
  component: TimePicker,
  args: { label: 'Choose a time' },
  parameters: {
    docs: {
      description: {
        component:
          'A configurable time listbox with controlled or uncontrolled selection, roving arrow-key focus, Home/End, Escape, and focus restoration.',
      },
    },
  },
  title: 'Components/Inputs/Time Picker',
} satisfies Meta<typeof TimePicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Selected: Story = { args: { defaultValue: '11:30' } };
export const Hourly: Story = { args: { end: '18:00', start: '08:00', step: 60 } };
export const RTL: Story = {
  args: { label: 'اختر الوقت', placeholder: 'اختر وقتًا' },
  globals: { direction: 'rtl' },
};
