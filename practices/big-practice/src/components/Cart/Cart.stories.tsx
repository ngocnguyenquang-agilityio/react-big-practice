// Types
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Cart from ".";

const meta = {
  title: 'Components/Cart',
  component: Cart,
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Cart />
}
