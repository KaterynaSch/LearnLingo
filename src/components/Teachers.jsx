import teachers from '../teachers.json';
import { CardItem } from './CardItem';
export default function Teachers() {
  return (
    <div className="px-[126px] pt-11 bg-grayBGN">
      <div>Filters</div>
      <ul className="flex flex-col gap-1 md:gap-4 lg:gap-8 md:flex-col  items-start  mb-11">
        {teachers.map(teacher => (
          <CardItem teacher={teacher} />
        ))}
      </ul>
      <button
        type="button"
        className="block text-center w-[184px] text-lg font-bold text-text bg-accent hover:bg-accentLight py-4 rounded-xl "
      >
        Load more
      </button>
    </div>
  );
}
