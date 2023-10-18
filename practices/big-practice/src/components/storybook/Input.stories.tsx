import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '../ui/input';

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

export const SearchInput: Story = {
  render: () => (
    <div className='relative'>
      <Input type='text' placeholder='Search Input' />
      <div className='absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none'>
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
    </div>
  )
}
