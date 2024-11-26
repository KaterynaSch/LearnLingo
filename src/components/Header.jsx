import { useState } from 'react';

import { Authorization } from './Auth/Authorization';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import Navigation from './Navigation';
import sprite from '../images/icons.svg';
import { CustomModal } from './UI/Modal';
import { ThemeSwitcher } from './ThemeSwitcher';
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
      <ThemeSwitcher />
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
        <CustomModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          styleVatiant="secondaryStyles"
        >
          <MobileMenu onClose={handleCloseModal} />
        </CustomModal>
      )}
    </header>
  );
};
