// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { MinusIcon } from '..';

const meta = {
  title: 'Icons/MinusIcon',
  component: MinusIcon,
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
} satisfies Meta<typeof MinusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MinusIcon />,
};
