import { useState } from 'react';
import Modal from 'react-modal';
import sprite from '../images/icons.svg';
import { SignInModal } from './SignInModal';
import { RegisterModal } from './RegisterModal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 26, 21, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '30px',
    padding: 0,
  },
};

Modal.setAppElement('#root');

export const Auth = () => {
  const [
    isLogin,
    // setIsLogin
  ] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="flex flex-row gap-1 md:gap-2 lg:gap-4 justify-center items-center">
      <button
        type="button"
        className="flex flex-row gap-1 md:gap-2 justify-center items-center"
        onClick={() => setIsSignInModalOpen(true)}
      >
        <svg className="stroke-accent fill-transparent size-5">
          <use xlinkHref={`${sprite}#icon_log_in`} />
        </svg>
        <span className="hidden md:block text-base/[1.2] font-bold ">
          {isLogin ? 'Log out' : 'Log in'}
        </span>
      </button>
      <button
        type="button"
        className="text-base/[1.2] font-bold text-white hover:text-accent bg-text px-5 py-2 lg:px-10 lg:py-3 rounded-xl"
        onClick={() => setIsRegisterModalOpen(true)}
      >
        Registration
      </button>

      <Modal
        isOpen={isSignInModalOpen}
        onRequestClose={closeSignInModal}
        style={customStyles}
      >
        <SignInModal onClose={closeSignInModal} />
      </Modal>
      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
        style={customStyles}
      >
        <RegisterModal onClose={closeRegisterModal} />
      </Modal>
    </div>
  );
};
