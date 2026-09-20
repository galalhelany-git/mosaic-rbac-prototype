import type { Meta, StoryObj } from '@storybook/react-vite';
import { Snackbar, Toast, ToastViewport } from './Toast';
const Check = () => (
  <svg fill="none" viewBox="0 0 24 24">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const meta = {
  component: Toast,
  args: {
    actionLabel: 'Undo',
    description: 'Saturday, March 11, 2024 at 3:45 PM',
    title: 'Scheduled: Strategy Discussion',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Toast uses a polite status region by default and an assertive alert for errors. Snackbar adds a status edge/icon; ToastViewport renders expanded or stacked groups. Lifecycle and queueing stay application-owned.',
      },
    },
  },
  title: 'Components/Feedback/Toast',
} satisfies Meta<typeof Toast>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Error: Story = { args: { error: true, title: 'Unable to save changes' } };
export const Dismissible: Story = { args: { onDismiss: () => undefined } };
export const SnackbarStory: Story = { render: (args) => <Snackbar {...args} icon={<Check />} /> };
export const ExpandedViewport: Story = {
  render: () => (
    <ToastViewport>
      <Toast description="First update" title="Notification one" />
      <Toast description="Second update" title="Notification two" />
      <Toast description="Third update" title="Notification three" />
    </ToastViewport>
  ),
};
export const StackedViewport: Story = {
  render: () => (
    <ToastViewport expanded={false}>
      <Toast title="One" />
      <Toast title="Two" />
      <Toast title="Three" />
    </ToastViewport>
  ),
};
export const RTL: Story = {
  args: {
    actionLabel: 'تراجع',
    description: 'تم الحفظ بنجاح',
    dismissLabel: 'إغلاق الإشعار',
    title: 'تم تحديث المشروع',
  },
  globals: { direction: 'rtl' },
};
