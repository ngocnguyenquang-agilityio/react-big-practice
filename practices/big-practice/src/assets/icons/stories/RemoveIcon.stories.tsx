// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { RemoveIcon } from '..';

const meta = {
  title: 'Icons/RemoveIcon',
  component: RemoveIcon,

} satisfies Meta<typeof RemoveIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <RemoveIcon />,
};
