import { IOption } from './dropdownOption.interface';

export interface IDropDown extends React.ComponentPropsWithoutRef<'select'> {
  dropdownOptions: IOption[];
}
