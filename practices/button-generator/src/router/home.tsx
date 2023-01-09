import React, { useReducer } from 'react';
import Button from '../components/Button';
import InputRange from '../components/InputRange';
import { getBtnSizeValue } from '../helpers/buttonHelpers';
import { buttonReducer, defaultButton } from '../reducer/button.reducer';

const Home = () => {
  const [btnStyle, dispatch] = useReducer(buttonReducer, defaultButton);

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_SIZE', data: e.target.value });
  };

  return (
    <form className='p-3 w-2/5'>
      <h1 className='font-bold leading-none tracking-tight text-3xl mb-5'>Home</h1>
      <div className='m-2 p-3 rounded-lg border-2 boder-solid border-grey-200'>
        <div className='w-full h-32 flex items-center justify-center'>
          <Button type='button' {...btnStyle} />
        </div>
      </div>

      <h2 className='font-bold leading-none tracking-tight text-2xl my-5'>Properties</h2>
      <div className='m-2 p-3 rounded-lg border-2 boder-solid border-grey-200'>
        <div className='pb-5'>
          <label>Button Size: {getBtnSizeValue(btnStyle.size)}</label>
          <InputRange min='1' max='3' step='1' value={btnStyle.size} onChange={handleChangeSize} />
        </div>
      </div>
    </form>
  );
};

export default Home;
