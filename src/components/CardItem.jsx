import sprite from '../images/icons.svg';
export const CardItem = ({
  teacher: { avatar_url, name, surname, lessons_done, rating, price_per_hour },
}) => {
  return (
    <li
      key={name + surname}
      className="p-1 md:p-2 lg:p-6 flex flex-row gap-3 md:gap-6 lg:gap-12 bg-white rounded-3xl w-full text-text"
    >
      {/* <div className="w-[120px]"> */}
      <div className="w-[120px] h-[120px] rounded-full border-[3px] border-background flex justify-center items-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="size-[96px] rounded-full"
        />
        {/* </div> */}
      </div>

      {/* BLOCKS */}
      <div className="flex flex-col gap-3 md:gap-6 lg:gap-8 flex-grow">
        {/* First block */}
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-2 font-medium">
            <p className="text-md  text-lightGray">Languages</p>
            <h2 className="text-2xl ">{name + ' ' + surname}</h2>
          </div>

          <ul className="flex flex-row gap-4 font-medium mr-16">
            <li className="inline-flex flex-row gap-2 items-center">
              <svg className="stroke-black fill-transparent size-4">
                <use xlinkHref={`${sprite}#icon_book_open`} />
              </svg>
              <p>Lessons online</p>
            </li>
            <li className="inline-flex flex-row gap-2 items-center">
              <p>Lessons done: {lessons_done}</p>
            </li>
            <li className="inline-flex flex-row gap-2 items-center">
              <svg className="  size-4">
                <use xlinkHref={`${sprite}#icon_star`} />
              </svg>
              <p>Rating: {rating}</p>
            </li>
            <li className="inline-flex flex-row gap-2 items-center">
              <p>
                Price / 1 hour:{' '}
                <span className="text-green">{price_per_hour} $</span>
              </p>
            </li>
          </ul>
          <svg className="stroke-black fill-transparent size-[24px]">
            <use xlinkHref={`${sprite}#icon_heart`} />
          </svg>
        </div>
      </div>
    </li>
  );
};
