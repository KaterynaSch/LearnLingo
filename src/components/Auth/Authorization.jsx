import { useEffect, useState } from 'react';

import sprite from '../../images/icons.svg';
import { auth } from '../../firebaseConfig';
import { SignInModal } from './SignInModal';
import { RegisterModal } from './RegisterModal';
import { CustomModal } from 'components/UI/CustomModal';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthIcon = () => {
  return (
    <svg className="stroke-accent fill-transparent size-5">
      <use xlinkHref={`${sprite}#icon_log_in`} />
    </svg>
  );
};

export const Authorization = () => {
  const [authUser, setAuthUser] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSignInModal = () => {
    setModalContent(<SignInModal onClose={closeModal} />);
    setIsModalOpen(true);
  };

  const openRegisterModal = () => {
    setModalContent(<RegisterModal onClose={closeModal} />);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log('user logged out');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-row gap-1 md:gap-2 lg:gap-4 justify-center items-center">
      {!authUser ? (
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

      {authUser ? (
        <p>{authUser.email}</p>
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
