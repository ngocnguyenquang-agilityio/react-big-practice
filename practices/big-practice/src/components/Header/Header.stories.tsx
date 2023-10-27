// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    toggleCart: () => {},
  },
};
