import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './DatePicker';
const meta = {
  component: DatePicker,
  args: { label: 'Choose a date' },
  parameters: {
    docs: {
      description: {
        component:
          'A labelled popup calendar trigger supporting single dates, ranges, and presets. Focus enters the calendar and returns to the trigger on close.',
      },
    },
  },
  title: 'Components/Inputs/Date Picker',
} satisfies Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const DateRange: Story = { args: { mode: 'range', placeholder: 'Select date range' } };
export const WithPresets: Story = {
  args: {
    presets: [
      { label: 'Today', value: new Date() },
      {
        label: 'Next 7 days',
        value: { start: new Date(), end: new Date(Date.now() + 6 * 86400000) },
      },
    ],
  },
};
export const RTL: Story = {
  args: { label: 'اختر تاريخًا', placeholder: 'اختر التاريخ' },
  globals: { direction: 'rtl' },
};
