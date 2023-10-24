// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { LogoIcon } from '..';

const meta = {
  title: 'Icons/LogoIcon',
  component: LogoIcon,
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
} satisfies Meta<typeof LogoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <LogoIcon />,
};
