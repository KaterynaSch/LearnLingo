import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';

import sprite from '../images/icons.svg';
import { Button } from './UI/Button';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters')
    .max(50, 'Full name must be less than 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\+[0-9]+$/, 'Please enter phone number in +380 format'),
});

export const BookingModal = ({ onClose, avatar_url, name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = () => {
    toast.success('You have successfully booked a trial lesson');
    onClose();
  };

  return (
    <div className="relative text-text w-[300px] md:w-[600px] p-5 md:p-16">
      <button
        type="button"
        className="absolute flex justify-center items-center top-4 right-4 md:top-5 md:right-5"
        onClick={onClose}
      >
        <svg className="stroke-text fill-transparent size-6 md:size-8">
          <use xlinkHref={`${sprite}#icon_close_btn`} />
        </svg>
      </button>

      <h2 className=" text-[24px] md:text-[40px]/[1.2] tracking-[-0.8px] font-medium mb-5">
        Book trial lesson
      </h2>
      <p className="mb-6 md:mb-10 text-sm md:text-base/[1.37]">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className=" flex flex-row  items-center gap-[14px] mb-6 md:mb-10">
        <img src={avatar_url} alt="avatar" className="size-11 rounded-full" />
        <div className="flex flex-col gap-1">
          <p className="text-lightGray text-xs font-medium ">Your teacher</p>
          <p className="text-base font-medium">{name}</p>
        </div>
      </div>

      <p className="text-base md:text-2xl font-medium mb-5">
        What is your main reason for learning English?
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="text-text ">
        <div className="h-[160px] md:h-[200px] overflow-y-auto overflow-x-hidden scroll-smooth">
          <div className="flex flex-col justify-center gap-2 md:gap-[18px] text-xs md:text-base/[1.37] font-normal mb-6 md:mb-10">
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="Career and business"
                {...register('reason')}
                className="radio-input"
                defaultChecked
              />
              <span className="radio-indicator"></span>
              Career and business
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="Lesson for kids"
                {...register('reason')}
                className="radio-input"
              />
              <span className="radio-indicator"></span>
              Lesson for kids
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="Living abroad"
                {...register('reason')}
                className="radio-input"
              />
              <span className="radio-indicator"></span>
              Living abroad
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="Exams and coursework"
                {...register('reason')}
                className="radio-input"
              />
              <span className="radio-indicator"></span>
              Exams and coursework
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="reason"
                value="Culture, travel or hobby"
                {...register('reason')}
                className="radio-input"
              />
              <span className="radio-indicator"></span>
              Culture, travel or hobby
            </label>
          </div>

          <div className="relative">
            <input
              {...register('fullName')}
              placeholder="Full Name"
              className=" w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base  placeholder:text-text border-[1px] border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"
            />
            {errors && (
              <p className=" absolute text-accent text-xs -bottom-0 left-2 ">
                {errors.fullName?.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              {...register('email')}
              placeholder="Email"
              className=" w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base placeholder:text-text border-[1px] border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"
            />

            {errors && (
              <p className=" absolute text-accent text-xs  -bottom-0 left-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              placeholder="Phone number"
              {...register('phone')}
              className="w-[250px] md:w-[450px] p-2 md:py-4 md:px-[18px] text-xs md:text-base placeholder:text-text  border-[1px]  border-text/[0.1] focus:border-accent focus:outline-none  rounded-xl mb-[18px]"
            />
            {errors && (
              <p className=" absolute text-accent text-xs  -bottom-0 left-2">
                {errors.phone?.message}
              </p>
            )}
          </div>
        </div>
        <Button text="Book" className={'mt-6 md:mt-[32px]'} />
      </form>
    </div>
  );
};
