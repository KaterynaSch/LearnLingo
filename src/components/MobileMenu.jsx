import sprite from '../images/icons.svg';
import { Authorization } from './Auth/Authorization';
import Navigation from './Navigation';
export const MobileMenu = ({ onClose }) => {
  return (
    <div className="relative  w-[200px] h-[400px] p-6 ">
      <button
        type="button"
        className="absolute flex justify-center items-center top-4 right-4 "
        aria-label="Close"
        onClick={onClose}
      >
        <svg className="stroke-text fill-transparent size-5">
          <use xlinkHref={`${sprite}#icon_close_btn`} />
        </svg>
      </button>
      <div className="flex flex-col h-full ">
        <Navigation onClose={onClose} />
        <Authorization />
      </div>
    </div>
  );
};
