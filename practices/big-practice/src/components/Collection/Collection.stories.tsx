// Types
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Collection from ".";

const mockListCollection = ['All', 'Hoodie', 'Jacket', 'Shirt']

const meta = {
  title: 'Components/Collection',
  component: Collection
} satisfies Meta<typeof Collection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    list: mockListCollection
  }
}
