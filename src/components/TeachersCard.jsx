import { useState } from 'react';

import sprite from '../images/icons.svg';
import { CustomModal } from './UI/Modal';
import { BookingModal } from './BookingModal';
import { useSearchParams } from 'react-router-dom';
export const TeachersCard = ({ teacher, isFavorite, handleFavorite }) => {
  const {
    id,
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
  } = teacher;
  const [isExpanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [params] = useSearchParams();

  const selectedLevel = params.get('level')?.toLowerCase();
  const formatLevel = level => level.toLowerCase().replace(/\s+/g, '_');

  const getOption = (options, flag) => {
    return options.map((option, idx) => {
      return (
        <span
          key={option}
          className={`text-text ${flag === 'languages' ? 'underline' : ''} `}
        >
          {option}
          {idx !== options.length - 1 && ', '}
        </span>
      );
    });
  };

  const toggleExpanded = () => {
    setExpanded(!isExpanded);
  };

  const openModal = () => {
    if (isModalOpen) return;
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative p-2 md:p-3 lg:p-6 flex flex-col items-center lg:items-start lg:flex-row gap-3 md:gap-6 lg:gap-12 bg-white rounded-3xl text-text font-medium">
      <div className=" relative min-w-[120px] h-[120px] rounded-full border-[3px] border-background flex justify-center items-center ">
        <img
          src={avatar_url}
          alt="avatar"
          className="size-[96px] rounded-full"
        />
        <svg className="absolute top-[18px] right-[18px] size-3">
          <use xlinkHref={`${sprite}#icon_online`} />
        </svg>
      </div>

      {/* BLOCKS */}
      <div className=" flex flex-col  gap-3 md:gap-6 lg:gap-8  w-full">
        {/* First block */}
        <div className=" flex flex-col  lg:flex-row justify-between items-center lg:justify-between lg:items-start w-full gap-2">
          <div className="flex flex-col gap-2 ">
            <p className=" text-center lg:text-left text-lightGray">Teacher</p>
            <h2 className="text-2xl ">{name + ' ' + surname}</h2>
          </div>

          <ul className="flex flex-row text-sm md:text-base items-center gap-2 flex-wrap  lg:mr-16">
            <li className="inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2] after:mx-4">
              <svg className="stroke-black fill-transparent size-4">
                <use xlinkHref={`${sprite}#icon_book_open`} />
              </svg>
              <p>Lessons online</p>
            </li>
            <li className="inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2] after:mx-4">
              <p>Lessons done: {lessons_done}</p>
            </li>
            <li className="inline-flex flex-row gap-2 items-center after:content-[''] after:h-[16px] after:w-[1px] after:bg-text/[0.2] after:mx-4">
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
            className="absolute flex justify-center items-center  top-2 right-2 md:top-3 md:right-3 lg:top-6 lg:right-6"
            onClick={() => handleFavorite(id)}
          >
            <svg
              className={`  size-[24px]  ${
                isFavorite
                  ? 'fill-accent stroke-accent'
                  : 'fill-transparent stroke-text'
              }`}
            >
              <use xlinkHref={`${sprite}#icon_heart`} />
            </svg>
          </button>
        </div>
        {/* Second block */}
        <div className="flex flex-col items-start gap-2 text-lightGray ">
          <p>Speaks: {getOption(languages, 'languages')}</p>
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
            className="underline mt-2 text-text"
            onClick={toggleExpanded}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
        {/* Third block */}
        <ul className="flex flex-row flex-wrap gap-2 text-text text-sm md:text-base ">
          {levels.map(level => {
            const isActive = formatLevel(level) === selectedLevel;
            return (
              <li key={level}>
                <button
                  type="button"
                  className={`rounded-[35px] border border-text/[0.2] px-3 py-2 ${
                    isActive ? 'bg-accent' : 'bg-transparent'
                  }`}
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
            className=" w-full md:w-[232px] py-2 md:py-4 text-text bg-accent rounded-xl"
            onClick={openModal}
          >
            Book trial lesson
          </button>
        )}
      </div>
      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onClose={closeModal}
          styleVariant="default"
        >
          <BookingModal
            avatar_url={avatar_url}
            name={name + ' ' + surname}
            onClose={closeModal}
          />
        </CustomModal>
      )}
    </div>
  );
};
