import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const ExampleIcon = () => (
  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
  </svg>
);

const meta = {
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'tertiary'] },
  },
  args: {
    children: 'Button text',
    size: 'lg',
    variant: 'primary',
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Use Button for user-triggered actions. It uses a native button, preserves accessible keyboard behavior, and maps supported size, variant, disabled, loading, and icon properties from Figma.',
      },
    },
  },
  title: 'Components/Actions/Button',
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="story-row">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="story-row story-row--end">
      <Button size="lg">Large</Button>
      <Button size="md">Medium</Button>
      <Button size="sm">Small</Button>
    </div>
  ),
};

export const Icons: Story = {
  args: {
    leadingIcon: <ExampleIcon />,
    trailingIcon: <ExampleIcon />,
  },
};

export const Loading: Story = {
  render: () => (
    <div className="story-row">
      <Button loading variant="primary">
        Saving changes
      </Button>
      <Button loading variant="secondary">
        Saving changes
      </Button>
      <Button loading variant="ghost">
        Saving changes
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const RTL: Story = {
  args: { leadingIcon: <ExampleIcon />, trailingIcon: <ExampleIcon /> },
  globals: { direction: 'rtl' },
};
