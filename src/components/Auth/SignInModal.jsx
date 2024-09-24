import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import sprite from '../../images/icons.svg';
import { auth } from 'components/firebaseConfig';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

const schema = yup.object({
  email: yup
    .string()
    .email('Invalid email')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const SignInModal = ({ onClose, setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [setError] = useState(null);
  const onSubmit = async ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        setError("Sorry, we couldin't find an account with that email");
      });
    onClose();
  };

  const handleShowPassword = () => {
    console.log('password showed');
  };

  return (
    <div className="relative text-text w-[566px] p-4 md:p-8 lg:p-16">
      <button
        type="button"
        className="absolute flex justify-center items-center top-5 right-5"
        onClick={onClose}
      >
        <svg className="stroke-text fill-transparent size-8">
          <use xlinkHref={`${sprite}#icon_close_btn`} />
        </svg>
      </button>
      <h2 className=" text-[40px] font-medium mb-5">Log in</h2>
      <p className="mb-10">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="text-text ">
        <input
          {...register('email')}
          placeholder="Email"
          className=" w-full py-4 px-[18px] text-md  border-[1px] border-text/[0.1] rounded-xl "
        />

        {errors && <p className="text-accent  ">{errors.email?.message}</p>}
        <div className="relative w-full mt-[18px]">
          <input
            placeholder="Password"
            {...register('password')}
            className="w-full py-4 px-[18px] text-md  border-[1px]  border-text/[0.1] rounded-xl "
          />
          {errors && <p className="text-accent ">{errors.password?.message}</p>}
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
        <button
          className="w-full text-center text-lg font-bold bg-accent py-4 rounded-xl mt-10"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};