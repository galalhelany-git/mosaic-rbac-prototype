import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { TopNavigation } from './TopNavigation';
const meta = {
  component: TopNavigation,
  args: {
    account: <Avatar name="Ahmed Galal" size="xs" />,
    actions: (
      <Button size="sm" variant="tertiary">
        Notifications
      </Button>
    ),
    brand: <strong>Mosaic</strong>,
    navigation: (
      <>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        component:
          'A semantic application header with consumer-owned brand, primary navigation, action, and account slots. Its intrinsic horizontal overflow avoids inventing unapproved breakpoints.',
      },
    },
    layout: 'fullscreen',
  },
  title: 'Components/Navigation/Top Navigation',
} satisfies Meta<typeof TopNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const RTL: Story = { globals: { direction: 'rtl' } };
