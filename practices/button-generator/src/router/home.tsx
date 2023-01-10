import React, { useReducer } from 'react';
import Button from '../components/Button';
import DropDownMenu from '../components/DropDownMenu';
import InputRange from '../components/InputRange';
import { DROPDOWN_OPTION_VARIANTS } from '../constants/options';
import { getBtnBorderRadiusValue, getBtnBorderSizeValue, getBtnSizeValue } from '../helpers/buttonHelpers';
import { buttonReducer, defaultButton } from '../reducer/button.reducer';

const Home = () => {
  const [btnStyle, dispatch] = useReducer(buttonReducer, defaultButton);

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

  return (
    <form className='p-3 w-2/5 grow md:grow-0'>
      <h1 className='font-bold leading-none tracking-tight text-xl md:text-2xl mb-5'>Home</h1>
      <div className='m-2 p-3 rounded-lg border-2 boder-solid border-grey-200'>
        <div className='w-full h-32 flex items-center justify-center'>
          <Button type='button' {...btnStyle} />
        </div>
      </div>

      <h2 className='font-bold leading-none tracking-tight text-lg md:text-xl md:text-2xl my-5'>Properties</h2>
      <div className='m-2 p-3 rounded-lg border-2 boder-solid border-grey-200'>
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
      </div>
    </form>
  );
};

export default Home;
