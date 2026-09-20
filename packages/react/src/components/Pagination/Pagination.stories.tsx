import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';
const meta = {
  component: Pagination,
  args: { currentPage: 5, onPageChange: () => undefined, totalPages: 12 },
  parameters: {
    docs: {
      description: {
        component:
          'A labelled pagination landmark with current-page semantics, bounded previous/next actions, configurable labels, and compact ellipsis ranges.',
      },
    },
  },
  title: 'Components/Navigation/Pagination',
} satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};
export const Start: Story = { args: { currentPage: 1 } };
export const End: Story = { args: { currentPage: 12 } };
export const RTL: Story = {
  args: {
    label: 'ترقيم الصفحات',
    nextAriaLabel: 'الصفحة التالية',
    nextLabel: 'التالي',
    previousAriaLabel: 'الصفحة السابقة',
    previousLabel: 'السابق',
  },
  globals: { direction: 'rtl' },
};
