import { useState } from 'react';
import ButtonPropertiesForm from '../components/ButtonPropertiesForm';
import Modal from '../components/Modal';

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [buttonCode, setButtonCode] = useState({ className: '', content: '' });

  const showBtnHTMLCode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setButtonCode({
      className: e.currentTarget.className.trim(),
      content: e.currentTarget.innerHTML,
    });
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <ButtonPropertiesForm showBtnHTMLCode={showBtnHTMLCode} />
      {isOpenModal && <Modal isOpenModal={isOpenModal} onCloseModal={closeModal} btnStyle={buttonCode} />}
    </>
  );
};

export default Home;
