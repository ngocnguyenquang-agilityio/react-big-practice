// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Collection from '.';
import { MemoryRouter } from 'react-router-dom';

const mockListCollection = [
  { value: 'all', label: 'All' },
  { value: 'phones', label: 'Phones' },
];

const meta = {
  title: 'Components/Collection',
  component: Collection,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Collection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: mockListCollection,
    title: 'Collection',
  },
};
