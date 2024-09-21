import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import sprite from '../images/icons.svg';
// import { signUp } from 'api';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebaseConfig';

const schema = yup.object({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
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

export const RegisterModal = ({ onClose, setIsLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    try {
      createUserWithEmailAndPassword(auth, email, password);
      setIsLogin(true);
      onClose();
    } catch (error) {
      console.log(error);
    }
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
      <h2 className=" text-[40px] font-medium mb-5">Registration</h2>
      <p className="mb-10">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="text-text ">
        <input
          {...register('name')}
          placeholder="Name"
          className=" w-full py-4 px-[18px] text-md  border-[1px] border-text/[0.1] rounded-xl mb-[18px]"
        />

        {errors && <p className="text-accent  ">{errors.email?.message}</p>}
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
          Sign Up
        </button>
      </form>
    </div>
  );
};
