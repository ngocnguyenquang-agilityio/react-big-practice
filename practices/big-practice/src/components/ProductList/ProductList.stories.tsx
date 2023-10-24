// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import ProductList from '.';

const meta = {
  title: 'Components/ProductList',
  component: ProductList,
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      {
        name: 'Product 1',
        price: 20,
        image:
          'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
        size: ['XS', 'S', 'M', 'L'],
        color: ['black', 'white', 'blue'],
      },
      {
        name: 'Product 2',
        price: 30,
        image:
          'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
        size: ['XS', 'S', 'M', 'L'],
        color: ['black', 'white', 'blue'],
      },
      {
        name: 'Product Detail',
        price: 20,
        image:
          'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
        size: ['XS', 'S', 'M', 'L'],
        color: ['black', 'white', 'blue'],
      },
    ],
  },
};
