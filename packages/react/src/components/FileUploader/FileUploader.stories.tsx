import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUploader } from './FileUploader';
const meta = {
  component: FileUploader,
  args: { onFiles: () => undefined },
  parameters: {
    docs: {
      description: {
        component:
          'A keyboard-accessible native file input surface with browse, drag/drop, disabled, alternate, and consumer-controlled upload progress states.',
      },
    },
  },
  title: 'Components/Inputs/File Uploader',
} satisfies Meta<typeof FileUploader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Base: Story = {};
export const Alternate: Story = { args: { variant: 'alternate' } };
export const Uploading: Story = { args: { progress: 64, uploading: true } };
export const Disabled: Story = { args: { disabled: true } };
export const RTL: Story = {
  args: { description: 'اسحب الملفات هنا أو اخترها', label: 'رفع الملفات' },
  globals: { direction: 'rtl' },
};
