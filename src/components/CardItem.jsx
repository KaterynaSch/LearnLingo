import { useState } from 'react';
import sprite from '../images/icons.svg';
export const CardItem = ({
  teacher: {
    avatar_url,
    name,
    surname,
    lessons_done,
    rating,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
    experience,
    reviews,
    levels,
  },
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const getOption = options => {
    return options.map((option, idx) => {
      return (
        <span key={option} className="text-text ">
          {option}
          {idx !== options.length - 1 && ', '}
        </span>
      );
    });
  };

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  return (
    <li
      key={name + surname}
      className=" p-1 md:p-2 lg:p-6 flex flex-row gap-3 md:gap-6 lg:gap-12 bg-white rounded-3xl w-full text-text font-medium"
    >
      <div className="min-w-[120px] h-[120px] rounded-full border-[3px] border-background flex justify-center items-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="size-[96px] rounded-full"
        />
      </div>

      {/* BLOCKS */}
      <div className="relative flex flex-col  gap-3 md:gap-6 lg:gap-8  w-full">
        {/* First block */}
        <div className=" flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-2 ">
            <p className="text-md  text-lightGray">Teacher</p>
            <h2 className="text-2xl ">{name + ' ' + surname}</h2>
          </div>

          <ul className="flex flex-row gap-4 mr-16">
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

          <button
            type="button"
            className="absolute flex justify-center items-center top-0 right-0"
          >
            <svg className="stroke-black fill-transparent size-[24px]">
              <use xlinkHref={`${sprite}#icon_heart`} />
            </svg>
          </button>
        </div>
        {/* Second block */}
        <div className="flex flex-col items-start gap-2 text-lightGray ">
          <p>Speaks: {getOption(languages)}</p>
          <p>
            Lesson Info: <span className="text-text">{lesson_info}</span>
          </p>
          <p>Conditions: {getOption(conditions)}</p>
          {isExpanded && (
            <div className="flex flex-col items-start gap-3 md:gap-6 lg:gap-8 text-text mb-2">
              <p className="max-w-full break-words">{experience}</p>
              <ul className="flex flex-col gap-3 md:gap-6 lg:gap-8">
                {reviews.map(({ reviewer_name, reviewer_rating, comment }) => {
                  return (
                    <li key={reviewer_name}>
                      <p className="text-lightGray">{reviewer_name}</p>{' '}
                      <div className="flex flex-row gap-2">
                        <svg className="size-4">
                          <use xlinkHref={`${sprite}#icon_star`} />
                        </svg>
                        <p>{reviewer_rating}</p>
                      </div>
                      <p>{comment}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <button
            type="button"
            // className={`underline mt-2  ${isExpanded ? 'hidden' : 'block'}`}
            className="underline mt-2"
            onClick={toggleExpanded}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
        {/* Third block */}
        <ul className="flex flex-row gap-2 text-text ">
          {levels.map(level => {
            return (
              <li key={level}>
                <button
                  type="button"
                  className="  rounded-[35px] border border-text/[0.2] px-3 py-2"
                >
                  {level}
                </button>
              </li>
            );
          })}
        </ul>
        {/* Fourth block */}
        {isExpanded && (
          <button
            type="button"
            className=" w-[232px] px-12 py-4 text-text bg-accent rounded-xl"
          >
            Book trial lesson
          </button>
        )}
      </div>
    </li>
  );
};
