import { Link } from 'react-router-dom';

import sprite from '../images/icons.svg';
export const Logo = () => {
  return (
    <Link to="/">
      <div className=" flex flex-row justify-center gap-2 items-center ">
        <svg width={28} height={28}>
          <use xlinkHref={`${sprite}#icon_ukraine`} />
        </svg>

        <p className="text-base/[1.2] font-medium  md:text-lg lg:text-xl text-text">
          LearnLingo
        </p>
      </div>
    </Link>
  );
};
