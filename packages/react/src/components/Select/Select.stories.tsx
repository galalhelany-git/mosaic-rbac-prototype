import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './Select';

const Options = () => (
  <>
    <option value="draft">Draft</option>
    <option value="review">In review</option>
    <option value="published">Published</option>
  </>
);

const meta = {
  args: {
    children: <Options />,
    defaultValue: 'review',
    helpText: 'Choose the current document status.',
    label: 'Status',
    size: 'md',
  },
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'The Phase 3 Select pilot applies the audited Figma combobox field visuals to a native select. This preserves keyboard and screen-reader behavior while the custom popup interaction remains unspecified in Figma.',
      },
    },
  },
  title: 'Components/Forms/Select',
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const WithoutLeadingIcon: Story = {
  args: { leadingIcon: false },
};

export const Error: Story = {
  args: { errorMessage: 'Choose an available status.', helpText: undefined },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const RTL: Story = {
  args: {
    children: (
      <>
        <option>مسودة</option>
        <option>قيد المراجعة</option>
        <option>منشور</option>
      </>
    ),
    helpText: 'اختر حالة المستند الحالية.',
    label: 'الحالة',
  },
  globals: { direction: 'rtl' },
};
