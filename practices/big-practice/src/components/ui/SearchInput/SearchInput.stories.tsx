import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './SearchInput';
import { InputProps } from '../Input/input';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  render: (args) => <SearchInput onChange={() => { }} {...args} />
} as Meta

type Story = StoryObj<InputProps>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Search Input',
    onChange: () => { }
  }
}
