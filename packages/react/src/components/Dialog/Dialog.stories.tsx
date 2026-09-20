import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Input } from '../Input';
import { Dialog } from './Dialog';
const meta = {
  component: Dialog,
  args: { children: 'Dialog content', open: true, title: 'Create project' },
  parameters: {
    docs: {
      description: {
        component:
          'A controlled native modal dialog with labelled title, Escape handling, focus containment, and composable header, body, and footer regions.',
      },
    },
  },
  title: 'Components/Containers/Dialog',
} satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;
const DialogExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        description="Deploy your new project in one click."
        footer={
          <>
            <Button onClick={() => setOpen(false)} size="sm" variant="ghost">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </>
        }
        onOpenChange={setOpen}
        open={open}
        title="Create project"
      >
        <Input label="Project name" />
      </Dialog>
    </>
  );
};
export const Interactive: Story = { render: () => <DialogExample /> };
export const Full: Story = {
  render: () => (
    <Dialog onOpenChange={() => undefined} open size="full" title="Full page dialog">
      Full dialog content
    </Dialog>
  ),
};
export const RTL: Story = { globals: { direction: 'rtl' }, render: () => <DialogExample /> };
