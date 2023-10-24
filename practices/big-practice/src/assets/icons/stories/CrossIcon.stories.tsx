// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CrossIcon } from '..';

const meta = {
  title: 'Icons/CrossIcon',
  component: CrossIcon,
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
} satisfies Meta<typeof CrossIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CrossIcon />,
};
