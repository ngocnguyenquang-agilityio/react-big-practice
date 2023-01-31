import InputRange from './index';
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

export default {
  title: 'Components/InputRange',
  component: InputRange,
} as Meta;

const Template: Story<React.ComponentPropsWithoutRef<'input'>> = (args) => <InputRange {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: '5',
  min: '0',
  max: '10',
  step: '1',
};
