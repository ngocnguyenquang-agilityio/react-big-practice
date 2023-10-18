import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './input';

export default {
  title: 'Components/Input',
  component: Input,
  render: (args) => <Input {...args} />
} as Meta

type Story = StoryObj<InputProps>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Text input'
  }
}
