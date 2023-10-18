import type { Meta, StoryObj } from '@storybook/react';
import SearchInput, { ISearchInput } from '../ui/SearchInput';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  render: (args) => <SearchInput onChange={() => { }} {...args} />
} as Meta

type Story = StoryObj<ISearchInput>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Search Input',
    onChange: () => { }
  }
}