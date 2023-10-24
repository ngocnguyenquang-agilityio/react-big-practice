// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CartIcon } from '..';

const meta = {
  title: 'Icons/CartIcon',
  component: CartIcon,
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
} satisfies Meta<typeof CartIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CartIcon />,
};
