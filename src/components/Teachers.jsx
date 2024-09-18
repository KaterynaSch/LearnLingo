import { TeachersList } from './TeachersList';

export default function Teachers() {
  return (
    <div className=" pt-11 pb-4  bg-grayBGN ">
      <div>Filters</div>
      <TeachersList />
      <button
        type="button"
        className="block text-center w-[184px] text-lg font-bold text-text bg-accent hover:bg-accentLight py-4 rounded-xl "
      >
        Load more
      </button>
    </div>
  );
}
