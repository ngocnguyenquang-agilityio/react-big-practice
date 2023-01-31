import { VARIANT } from '../../enums/button';
import Button from '../Button';

const Modal = ({
  isOpenModal,
  onCloseModal,
  btnStyle,
}: {
  isOpenModal: boolean;
  onCloseModal: () => void;
  btnStyle: { className: string; content: string };
}) => {
  return (
    <div className={`fixed inset-0 backdrop-blur-sm flex z-10 justify-center items-center ${!isOpenModal && `hidden`}`}>
      <div className='w-2/5 pointer-events-none'>
        <div className='border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'>
          <div className='flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md'>
            <h5 className='text-xl font-medium leading-normal text-gray-800' id='exampleModalLabel'>
              Your button in HTML is:
            </h5>
          </div>

          <code className='p-5'>
            {`<button className="${btnStyle.className}">
                ${btnStyle.content}
              </button>`}
          </code>

          <div className='flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md'>
            <Button textContent='Close' bgColor={VARIANT.DANGER} borderColor={VARIANT.DANGER} onClick={onCloseModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
