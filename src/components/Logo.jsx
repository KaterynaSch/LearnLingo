import { Link } from 'react-router-dom';
import sprite from '../images/icons.svg';

export const Logo = () => {
  return (
    <div className=" flex flex-row justify-center gap-2 items-center ">
      <Link to="/">
        <svg width={28} height={28}>
          <use xlinkHref={`${sprite}#icon_ukraine`} />
        </svg>
      </Link>

      <p className="text-base/[1.2] font-medium  md:text-lg lg:text-xl text-text">
        LearnLingo
      </p>
    </div>
  );
};
