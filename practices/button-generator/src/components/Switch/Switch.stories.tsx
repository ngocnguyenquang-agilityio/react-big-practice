import Switch from '.';
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';
import { ISwitch } from '../../interfaces/switch.interface';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

const Template: Story<ISwitch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: () => {},
};
