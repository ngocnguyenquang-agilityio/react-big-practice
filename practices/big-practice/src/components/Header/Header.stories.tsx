// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
  render: () => <Header toggleCart={() => {}} />,
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <Header toggleCart={() => {}} />,
};
