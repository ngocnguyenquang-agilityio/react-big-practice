// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Collection from '.';
import { COLLECTION_TYPE } from '@interfaces';

const mockListCollection = [
  { value: 'all', label: 'All' },
  { value: 'phones', label: 'Phones' },
];

const meta = {
  title: 'Components/Collection',
  component: Collection,
} satisfies Meta<typeof Collection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: mockListCollection,
    title: 'Collection',
    type: COLLECTION_TYPE.CATEGORY,
  },
};
