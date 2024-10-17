import { useState } from 'react';
import Modal from 'react-modal';
import { Authorization } from './Auth/Authorization';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import Navigation from './Navigation';
import sprite from '../images/icons.svg';

Modal.setAppElement('#root');
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 26, 21, 0.6)',
  },
  content: {
    top: 0,
    right: 0,
    left: 'auto',
    bottom: 'auto',
    border: 'none',
    borderRadius: '12px',
    padding: 0,
  },
};

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className=" flex flex-row justify-around items-center mb-5 h-12">
      <Logo />
      <div className="hidden lg:flex flex-row gap-[268px]">
        <Navigation />
        <Authorization />
      </div>
      <button
        type="button"
        onClick={handleOpenModal}
        className="flex  lg:hidden"
      >
        <svg className="stroke-text hover:stroke-accent fill-transparent size-7">
          <use xlinkHref={`${sprite}#burger`} />
        </svg>
      </button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <MobileMenu onClose={handleCloseModal} />
        </Modal>
      )}
    </header>
  );
};
