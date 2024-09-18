import { Link } from 'react-router-dom';
import heroIMG from '../images/block_result.png';
const benefits = [
  { value: '32,000 +', descr: 'Experienced tutors' },
  { value: '300,000 +', descr: '5-star tutor reviews' },
  { value: '120 +', descr: 'Subjects taught' },
  { value: '200 +', descr: 'Tutor nationalities' },
];

export const Home = () => {
  return (
    <div className=" container pb-8">
      <div className=" flex flex-col lg:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-6 mb-2 md:mb-4 lg:mb-6 ">
        <div className="bg-grayBGN rounded-[30px] py-6 md:py-12 lg:py-24 px-4 md:px-8 lg:px-16 w-full h-auto lg:w-[720px] lg:h-[530px] ">
          <h1 className="text-text text-2xl md:text-4xl lg:text-5xl/[56px] font-medium tracking-[-0.96px] mb-4 md:mb-6 lg:mb-8">
            Unlock your potential with the best{' '}
            <span className="bg-background italic leading-[56px] rounded-xl">
              language
            </span>{' '}
            tutors
          </h1>
          <p className="mb-8 md:mb-12 lg:mb-[64px]">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link
            to="/teachers"
            className="block text-center w-full md:w-[267px] text-sm lg:text-lg font-bold text-text bg-accent hover:bg-accentLight py-4 rounded-xl "
          >
            Get started
          </Link>
        </div>
        <div className=" rounded-[30px] w-full  md:w-[704px] md:h-[658px]   lg:w-[568px] lg:h-[530px]">
          <img className="w-full h-full " src={heroIMG} alt="hero-img" />
        </div>
      </div>
      <div className="rounded-[30px] border border-dashed border-accent w-full py-2 md:py-6 lg:py-10 ">
        <ul className="flex flex-col md:flex-row items-center  justify-around ">
          {benefits.map(({ value, descr }) => (
            <li
              className="flex flex-row items-center gap-2 lg:gap-4"
              key={descr}
            >
              <p className="text-[20px] lg:text-[28px]/[32px] tracking-[-0.56px] font-medium">
                {value}
              </p>
              <p className=" text-[14px]/[18px] tracking-[-0.28px] w-[74px] whitespace-nowrap md:whitespace-pre-wrap text-gray">
                {descr}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
