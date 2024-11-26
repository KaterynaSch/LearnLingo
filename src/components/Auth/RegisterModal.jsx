import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { set, ref } from 'firebase/database';
import toast from 'react-hot-toast';

import { auth, db } from 'firebaseConfig';
import sprite from '../../images/icons.svg';
import { CustomButton } from 'components/UI/Button';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const RegisterModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const onSubmit = async ({ name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      await updateProfile(user, {
        displayName: name,
      });

      await set(ref(db, 'users/' + user.uid), {
        name: name,
        email: email,
        favorites: [],
      });

      toast.success('You have successfully registered');
    } catch (error) {
      toast.error('Error create an account');
    }
    onClose();
  };

  return (
    <div className="relative text-text w-[300px] md:w-[566px] p-5 md:p-8 lg:p-16">
      <button
        type="button"
        className="absolute flex justify-center items-center top-4 right-4 md:top-5 md:right-5"
        onClick={onClose}
      >
        <svg className="stroke-text fill-transparent size-6 md:size-8">
          <use xlinkHref={`${sprite}#icon_close_btn`} />
        </svg>
      </button>
      <h2 className="text-[24px] md:text-[40px]/[1.2] tracking-[-0.8px] font-medium mb-5">
        Registration
      </h2>
      <p className="mb-7 md:mb-10 text-base/[22px] ">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-text text-base/[1.37]  "
      >
        <div className="relative ">
          <input
            type="text"
            {...register('name')}
            placeholder="Name"
            className="w-full py-4 px-[18px] placeholder:text-text border-[1px]  border-text/[0.1] focus:border-accent focus:outline-none rounded-xl mb-[18px]"
          />
          {errors && (
            <p className=" absolute text-accent text-xs  -bottom-0 left-2">
              {errors.email?.message}
            </p>
          )}{' '}
        </div>
        <div className="relative ">
          <input
            type="text"
            {...register('email')}
            placeholder="Email"
            className=" w-full py-4 px-[18px] placeholder:text-text border-[1px]  border-text/[0.1] focus:border-accent focus:outline-none rounded-xl mb-[18px]"
          />
          {errors && (
            <p className=" absolute text-accent text-xs  -bottom-0 left-2">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password')}
            className="w-full py-4 px-[18px] placeholder:text-text border-[1px]  border-text/[0.1] focus:border-accent focus:outline-none rounded-xl mb-[18px]"
          />
          {errors && (
            <p className=" absolute text-accent text-xs  -bottom-0 left-2">
              {errors.password?.message}
            </p>
          )}
          <button
            type="button"
            className="absolute flex justify-center items-center top-4 right-[18px]  "
            onClick={toggleShowPassword}
          >
            <svg className="stroke-text fill-transparent size-[22px]">
              <use
                xlinkHref={`${sprite}#icon_${showPassword ? 'eye_off' : 'eye'}`}
              />
            </svg>
          </button>
        </div>
        <CustomButton text="Sign Up" className={'mt-[10px] md:mt-[32px]'} />
      </form>
    </div>
  );
};
