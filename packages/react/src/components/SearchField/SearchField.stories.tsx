import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchField } from './SearchField';
const meta = {
  args: { 'aria-label': 'Search', placeholder: 'Search' },
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component:
          'A compact native search field. Use an external visible label when the context does not already communicate its purpose.',
      },
    },
  },
  title: 'Components/Forms/SearchField',
} satisfies Meta<typeof SearchField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Filled: Story = { args: { defaultValue: 'Customer' } };
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = {
  args: { 'aria-label': 'بحث', placeholder: 'بحث' },
  globals: { direction: 'rtl' },
};
