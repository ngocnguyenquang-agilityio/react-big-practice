import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";


export default {
  title: 'Components/Header',
  component: Header,
  render: () => <Header />
} as Meta

type Story = StoryObj

export const Default: Story = {
  render: () => <Header />
}
