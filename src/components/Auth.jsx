import sprite from '../images/icons.svg';

export const Auth = () => {
  return (
    <div className="flex flex-row gap-1 md:gap-2 lg:gap-4 justify-center items-center">
      <button
        type="button"
        className="flex flex-row gap-1 md:gap-2 justify-center items-center"
      >
        <svg
          className="stroke-accent fill-transparent size-5"
          width={28}
          height={28}
        >
          <use xlinkHref={`${sprite}#icon_log_in`} />
        </svg>
        <span className="hidden md:block text-base/[1.2] font-bold ">
          Log in
        </span>
      </button>
      <button
        type="button"
        className="text-base/[1.2] font-bold text-white hover:text-accent bg-text px-5 py-2 lg:px-10 lg:py-3 rounded-xl"
      >
        Registration
      </button>
    </div>
  );
};
