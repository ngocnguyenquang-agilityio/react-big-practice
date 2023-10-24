// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { SearchIcon } from '..';

const meta = {
  title: 'Icons/SearchIcon',
  component: SearchIcon,
} satisfies Meta<typeof SearchIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SearchIcon />,
};
