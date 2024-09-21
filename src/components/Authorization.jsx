import { useState } from 'react';

import sprite from '../images/icons.svg';
import { SignInModal } from './SignInModal';
import { RegisterModal } from './RegisterModal';
import { CustomModal } from './UI/CustomModal';
import { signOut } from 'firebase/auth';
import { auth } from 'firebaseConfig';

const AuthIcon = () => {
  return (
    <svg className="stroke-accent fill-transparent size-5">
      <use xlinkHref={`${sprite}#icon_log_in`} />
    </svg>
  );
};

export const Authorization = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSignInModal = () => {
    setModalContent(
      <SignInModal onClose={closeModal} setIsLogin={setIsLogin} />
    );
    setIsModalOpen(true);
  };

  const openRegisterModal = () => {
    setModalContent(
      <RegisterModal onClose={closeModal} setIsLogin={setIsLogin} />
    );
    setIsModalOpen(true);
  };

  const handleLogOut = () => {
    try {
      signOut(auth);
      console.log('user logged out');
      setIsLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row gap-1 md:gap-2 lg:gap-4 justify-center items-center">
      {!isLogin ? (
        <button
          type="button"
          className="flex flex-row gap-1 md:gap-2 justify-center items-center"
          onClick={openSignInModal}
        >
          <AuthIcon />
          <span className="hidden md:block text-base/[1.2] font-bold ">
            Log in
          </span>
        </button>
      ) : (
        <button
          type="button"
          className="flex flex-row gap-1 md:gap-2 justify-center items-center"
          onClick={handleLogOut}
        >
          <AuthIcon />
          <span className="hidden md:block text-base/[1.2] font-bold ">
            Log out
          </span>
        </button>
      )}

      {isLogin ? (
        <p>Hello, username</p>
      ) : (
        <button
          type="button"
          className="text-base/[1.2] font-bold text-white hover:text-accent bg-text px-5 py-2 lg:px-10 lg:py-3 rounded-xl"
          onClick={openRegisterModal}
        >
          Registration
        </button>
      )}

      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
        {modalContent}
      </CustomModal>
    </div>
  );
};
