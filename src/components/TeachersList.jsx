// import teachers from '../teachers.json';
import { CardItem } from './CardItem';
export const TeachersList = ({ teachers }) => {
  console.log(teachers);
  return (
    <ul className="flex flex-col gap-2 md:gap-4 lg:gap-8 md:flex-col  items-start  mb-11 w-[300px]  md:w-[704px]  lg:w-[1184px] mx-auto">
      {teachers.map(teacher => (
        <CardItem teacher={teacher} />
      ))}
    </ul>
  );
};
