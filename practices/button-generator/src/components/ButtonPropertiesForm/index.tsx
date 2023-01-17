import { useContext, useReducer } from 'react';
import { DROPDOWN_OPTION_VARIANTS } from '../../constants/options';
import { getBtnBorderRadiusValue, getBtnBorderSizeValue, getBtnSizeValue } from '../../helpers/buttonHelpers';
import { buttonReducer, defaultButton } from '../../reducer/button.reducer';
import { CollectionContext, CollectionType } from '../../store/collection.context';
import Button from '../Button';
import DropDownMenu from '../DropdownMenu';
import InputRange from '../InputRange';
import Switch from '../Switch';

const ButtonPropertiesForm = ({
  showBtnHTMLCode,
}: {
  showBtnHTMLCode: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): React.ReactElement => {
  const [btnStyle, dispatch] = useReducer(buttonReducer, defaultButton);
  const { addToCollectionButton } = useContext(CollectionContext) as CollectionType;

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_SIZE', data: e.target.value });
  };

  const handleChangeBgColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'CHANGE_BG_COLOR', data: e.target.value });
  };

  const handleChangeBorderSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_BORDER_SIZE', data: e.target.value });
  };

  const handleChangeBorderColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'CHANGE_BORDER_COLOR', data: e.target.value });
  };

  const handleChangeBorderRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_BORDER_RADIUS', data: e.target.value });
  };

  const handleSetDisplayBlock = () => {
    dispatch({ type: 'SET_BUTTON_TO_BLOCK', data: !btnStyle.isDisplayBlock });
  };

  const handleSetDisable = () => {
    dispatch({ type: 'SET_BUTTON_DISABLED', data: !btnStyle.isDisabled });
  };

  const handleAddButtonToCollection = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addToCollectionButton(btnStyle);
    alert('Added to collection');
  };

  return (
    <div className='p-3 w-2/5 grow md:grow-0'>
      <h1 className='font-bold leading-none tracking-tight text-xl md:text-2xl mb-5'>Home</h1>
      <div className='m-2 p-3 rounded-lg border-2 border-solid border-grey-200'>
        <div className='w-full h-32 flex items-center justify-center'>
          <Button {...btnStyle} onClick={showBtnHTMLCode} />
        </div>
      </div>

      <h2 className='font-bold leading-none tracking-tight text-lg md:text-xl md:text-2xl my-5'>Properties</h2>
      <form className='m-2 p-3 rounded-lg border-2 border-solid border-grey-200'>
        <div className='pb-1 md: pb-3'>
          <label className='text-sm md:text-md'>Button Size: {getBtnSizeValue(btnStyle.size!)}</label>
          <InputRange min='1' max='3' step='1' value={btnStyle.size} onChange={handleChangeSize} />
        </div>

        <div className='pb-1 md: pb-3'>
          <label className='text-sm md:text-md'>Background Color</label>
          <DropDownMenu dropdownOptions={DROPDOWN_OPTION_VARIANTS} onChange={handleChangeBgColor} />
        </div>

        <div className='pb-1 md: pb-3'>
          <label className='text-sm md:text-md'>Border Size: {getBtnBorderSizeValue(btnStyle.borderSize!)}</label>
          <InputRange min='1' max='4' step='1' value={btnStyle.borderSize} onChange={handleChangeBorderSize} />
        </div>

        <div className='pb-1 md: pb-3'>
          <label className='text-sm md:text-md'>Border Color</label>
          <DropDownMenu dropdownOptions={DROPDOWN_OPTION_VARIANTS} onChange={handleChangeBorderColor} />
        </div>

        <div className='pb-1 md: pb-3'>
          <label className='text-sm md:text-md'>Border Radius: {getBtnBorderRadiusValue(btnStyle.borderRadius!)}</label>
          <InputRange min='1' max='4' step='1' value={btnStyle.borderRadius} onChange={handleChangeBorderRadius} />
        </div>

        <div className='pb-1 md: pb-3 flex gap-2'>
          <label className='text-sm md:text-md'>Set button to display block</label>
          <Switch onChange={handleSetDisplayBlock} />
        </div>

        <div className='pb-1 md: pb-3 flex gap-2'>
          <label className='text-sm md:text-md'>Set button to disable</label>
          <Switch onChange={handleSetDisable} />
        </div>

        <div className='mt-5 pr-3'>
          <Button textContent='Add to Collection' isDisplayBlock onClick={handleAddButtonToCollection} />
        </div>
      </form>
    </div>
  );
};

export default ButtonPropertiesForm;
