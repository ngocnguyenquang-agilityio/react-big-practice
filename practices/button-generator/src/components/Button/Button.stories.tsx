import Button from './index';
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';
import { IButton } from '../../interfaces/button.interface';
import { VARIANT, ROUNDED_SIZE, SIZE, BORDER_SIZE } from '../../enums/button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: SIZE.MEDIUM,
  borderSize: BORDER_SIZE.SMALL,
  borderRadius: ROUNDED_SIZE.MEDIUM,
  borderColor: VARIANT.PRIMARY,
  bgColor: VARIANT.PRIMARY,
  textColor: VARIANT.PRIMARY,
  textContent: 'Button',
  isDisplayBlock: false,
  isDisabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  size: SIZE.MEDIUM,
  borderSize: BORDER_SIZE.SMALL,
  borderRadius: ROUNDED_SIZE.MEDIUM,
  borderColor: VARIANT.DANGER,
  bgColor: VARIANT.DANGER,
  textColor: VARIANT.DANGER,
  textContent: 'Button',
  isDisplayBlock: false,
  isDisabled: false,
};
