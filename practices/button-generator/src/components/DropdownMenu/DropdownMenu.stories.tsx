import DropDown from '.';
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';
import { IDropDown } from '../../interfaces/dropdown.interface';
import { DROPDOWN_OPTION_VARIANTS } from '../../constants/options';

export default {
  title: 'Components/DropDown',
  component: DropDown,
} as Meta;

const Template: Story<IDropDown> = (args) => <DropDown {...args} />;

export const Default = Template.bind({});

Default.args = {
  dropdownOptions: DROPDOWN_OPTION_VARIANTS,
};
