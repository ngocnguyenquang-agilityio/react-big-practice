// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { PlusIcon } from '..';

const meta = {
  title: 'Icons/PlusIcon',
  component: PlusIcon,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#FFF',
        },
      ],
    },
  },
} satisfies Meta<typeof PlusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <PlusIcon />,
};
