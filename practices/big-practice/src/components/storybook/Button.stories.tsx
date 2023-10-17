import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../ui/button'
import { Menu } from 'lucide-react';


export default {
  title: 'Components/Button',
  component: Button,
  render: (args) => (<Button {...args}>Click me</Button>)
} as Meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    variant: 'default'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
  }
}

export const Disabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
    className: 'cursor-not-allowed'
  }
}

export const IconButton: Story = {
  render: () => (
    <Button variant='outline' size='icon'>
      <Menu />
    </Button>
  )
}
