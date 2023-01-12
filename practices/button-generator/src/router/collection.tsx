import React, { useContext } from 'react';
import Button from '../components/Button';
import { SIZE, VARIANT } from '../enums/button';
import { getBtnInHTML } from '../helpers/buttonHelpers';
import { CollectionContext, CollectionType } from '../store/collection.context';

const Collection = () => {
  const { value, removeButtonFromCollection } = useContext(CollectionContext) as CollectionType;

  const showBtnHTMLCode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert(`Your button in HTML is:\n${getBtnInHTML(e)}`);
  };

  const handleRemoveButton = (id: string) => {
    const message = 'Are you sure to remove this button ?';
    if (confirm(message) === true) {
      removeButtonFromCollection(id);
    }
  };

  return (
    <div className='p-3 w-3/5 grow md:grow-0'>
      <h1 className='font-bold leading-none tracking-tight text-xl md:text-2xl mb-5'>Collection</h1>
      <div className='m-2 p-2 rounded-lg border-2 border-solid border-grey-200'>
        <table className='w-full border text-center'>
          <thead className='border-b bg-slate-50'>
            <tr>
              <th className='border-r'>Buttons</th>
              <th className='border-r'>Action</th>
            </tr>
          </thead>
          <tbody className='border-b'>
            {value.length === 0 ? (
              <tr>
                <td colSpan={2}>
                  <span>There is no button yet</span>
                </td>
              </tr>
            ) : (
              value.map((item) => (
                <tr key={item.id} className='border-b'>
                  <td className='border-r pr-3'>
                    <Button {...item} onClick={showBtnHTMLCode} />
                  </td>
                  <td>
                    <Button
                      textContent='Remove'
                      bgColor={VARIANT.DANGER}
                      borderColor={VARIANT.DANGER}
                      size={SIZE.SMALL}
                      onClick={() => handleRemoveButton(item.id!)} // TODO: Remove the arrow function. Find another way and test re-render later
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Collection;
