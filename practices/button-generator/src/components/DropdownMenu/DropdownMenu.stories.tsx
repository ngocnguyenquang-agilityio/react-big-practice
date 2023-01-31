import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';
import DropDownMenu from '.';
import { DROPDOWN_OPTION_VARIANTS } from '../../constants/options';
import { IDropDownMenu } from '../../interfaces/dropdownMenu.interface';

export default {
  title: 'Components/DropDownMenu',
  component: DropDownMenu,
} as Meta;

const Template: Story<IDropDownMenu> = (args) => <DropDownMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  dropdownOptions: DROPDOWN_OPTION_VARIANTS,
};
