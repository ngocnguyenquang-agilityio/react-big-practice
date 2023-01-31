import { IOption } from './dropdownOption.interface';

export interface IDropDownMenu extends React.ComponentPropsWithoutRef<'select'> {
  dropdownOptions: IOption[];
}
