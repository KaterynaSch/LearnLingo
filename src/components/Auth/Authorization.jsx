import { useEffect, useState } from 'react';

import sprite from '../../images/icons.svg';
import { auth } from '../../firebaseConfig';
import { SignInModal } from './SignInModal';
import { RegisterModal } from './RegisterModal';
import { CustomModal } from 'components/UI/CustomModal';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

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
    if (!isModalOpen) {
      setModalContent(<SignInModal onClose={closeModal} />);
      setIsModalOpen(true);
    }
  };

  const openRegisterModal = () => {
    if (!isModalOpen) {
      setModalContent(<RegisterModal onClose={closeModal} />);
      setIsModalOpen(true);
    }
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
      .catch(() => {
        toast.error('Error logout');
      });
  };

  return (
    <div className="flex flex-col mt-auto gap-4 items-start md:gap-4 lg:flex-row  lg:gap-4 lg:justify-center lg:items-center">
      {!authUser ? (
        <button
          type="button"
          className="flex flex-row gap-1 md:gap-2 justify-center items-center"
          onClick={openSignInModal}
        >
          <AuthIcon />
          <span className=" text-base/[1.2] font-bold ">Log in</span>
        </button>
      ) : (
        <button
          type="button"
          className="flex flex-row gap-1 md:gap-2 justify-center items-center"
          onClick={handleLogOut}
        >
          <AuthIcon />
          <span className=" text-base/[1.2] font-bold ">Log out</span>
        </button>
      )}

      {authUser ? (
        <p className="hidden lg:block">
          Hello, <strong>{authUser.displayName}</strong>
        </p>
      ) : (
        <button
          type="button"
          className="text-base/[1.2] font-bold text-white hover:text-accent bg-text px-5 py-2 lg:px-10 lg:py-3 rounded-xl"
          onClick={openRegisterModal}
        >
          Registration
        </button>
      )}
      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onClose={closeModal}
          styleVariant="default"
        >
          {modalContent}
        </CustomModal>
      )}
    </div>
  );
};
