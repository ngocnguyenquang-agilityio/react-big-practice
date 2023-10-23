// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import ProductDetail from '.';

const meta = {
  title: 'Components/ProductDetail',
  component: ProductDetail,
} satisfies Meta<typeof ProductDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProductDetail />,
};
