import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import sprite from '../../images/icons.svg';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'components/UI/Button';
import { auth } from 'firebaseConfig';

const validationSchema = Yup.object().shape({
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

export const SignInModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [setError] = useState(null);
  const onSubmit = async ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        setError(error.message);
      });
    onClose();
  };

  const handleShowPassword = () => {
    console.log('password showed');
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
      <h2 className=" text-[24px] md:text-[40px]/[1.2] tracking-[-0.8px] font-medium mb-5">
        Log in
      </h2>
      <p className="text-base/[1.37] mb-7 md:mb-10">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-text text-base/[22px]"
      >
        <div className="relative">
          <input
            {...register('email')}
            placeholder="Email"
            className=" w-full py-4 px-[18px] border-[1px] border-text/[0.1] rounded-xl mb-[18px]"
          />
          {errors && (
            <p className=" absolute text-accent text-xs  -bottom-0 left-2">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            placeholder="Password"
            {...register('password')}
            className="w-full py-4 px-[18px]  border-[1px]  border-text/[0.1] focus:border-accent focus:outline-none rounded-xl mb-[18px]"
          />
          {errors && (
            <p className="absolute text-accent text-xs  -bottom-0 left-2">
              {errors.password?.message}
            </p>
          )}
          <button
            type="button"
            className="absolute flex justify-center items-center top-4 right-[18px]  "
            onClick={handleShowPassword}
          >
            <svg className="stroke-text fill-transparent size-[22px]">
              <use xlinkHref={`${sprite}#icon_eye_off`} />
            </svg>
          </button>
        </div>
        <Button text="Log In" className={'mt-[10px] md:mt-[32px]'} />
      </form>
    </div>
  );
};
