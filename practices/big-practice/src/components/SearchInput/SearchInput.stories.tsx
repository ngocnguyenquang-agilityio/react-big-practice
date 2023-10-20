// Types
import type { Meta, StoryObj } from '@storybook/react';
import type { InputProps } from '@components/Input';

// Components
import SearchInput from '.';

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
