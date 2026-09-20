import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { DateRange } from './Calendar';
import { Calendar } from './Calendar';
const meta = {
  component: Calendar,
  args: { month: new Date(2024, 9, 1) },
  parameters: {
    docs: {
      description: {
        component:
          'A locale-aware single or range calendar grid. Arrow keys move by day/week, Home and End move within a week, and Page Up/Down move by month.',
      },
    },
  },
  title: 'Components/Inputs/Calendar',
} satisfies Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Single: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | DateRange>(new Date(2024, 9, 17));
    return <Calendar {...args} onChange={setDate} value={date} />;
  },
};
export const Range: Story = {
  args: { mode: 'range' },
  render: (args) => {
    const [range, setRange] = useState<Date | DateRange>({
      start: new Date(2024, 9, 10),
      end: new Date(2024, 9, 17),
    });
    return <Calendar {...args} onChange={setRange} value={range} />;
  },
};
export const WithPresets: Story = {
  args: {
    presets: [
      { label: 'Today', value: new Date() },
      {
        label: 'This week',
        value: { start: new Date(), end: new Date(Date.now() + 6 * 86400000) },
      },
    ],
  },
};
export const RTL: Story = { globals: { direction: 'rtl' }, render: Single.render };
