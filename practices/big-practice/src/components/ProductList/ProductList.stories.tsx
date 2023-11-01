// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import ProductList from '.';

// Mocks
import { mockProducts } from './mockProducts';

const meta = {
  title: 'Components/ProductList',
  component: ProductList,
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: mockProducts,
    sortBy: 'low-to-high',
  },
};
