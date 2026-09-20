import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';
const items = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#mosaic', label: 'Mosaic' },
  { href: '#components', label: 'Components' },
  { label: 'Breadcrumb' },
];
const meta = {
  component: Breadcrumb,
  args: { items },
  parameters: {
    docs: {
      description: {
        component:
          'A navigation landmark with ordered hierarchy, link semantics, current-page state, and optional middle-item collapse.',
      },
    },
  },
  title: 'Components/Navigation/Breadcrumb',
} satisfies Meta<typeof Breadcrumb>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Collapsed: Story = {
  args: {
    items: [
      { href: '#1', label: 'Home' },
      { href: '#2', label: 'Workspace' },
      { href: '#3', label: 'Projects' },
      { href: '#4', label: 'Design system' },
      { href: '#5', label: 'Navigation' },
      { label: 'Breadcrumb' },
    ],
    maxItems: 4,
  },
};
export const RTL: Story = { globals: { direction: 'rtl' } };
