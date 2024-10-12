import { TeachersCard } from './TeachersCard';
export const TeachersList = ({ teachers, favorites, handleFavorite }) => {
  return (
    <ul className="flex flex-col gap-2 md:gap-4 lg:gap-8 md:flex-col items-center mb-5 md:mb-11 mx-auto">
      {teachers.map(teacher => (
        <li key={teacher.id} className="w-full">
          <TeachersCard
            teacher={teacher}
            isFavorite={favorites.includes(teacher.id)}
            handleFavorite={handleFavorite}
          />
        </li>
      ))}
    </ul>
  );
};
