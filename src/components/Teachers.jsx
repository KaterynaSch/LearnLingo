import { useEffect, useState } from 'react';
import { getMoreTeachers, getTeachers } from 'api';
import { TeachersList } from './TeachersList';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastId, setLastId] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      setIsLoading(true);
      try {
        const teachers = await getTeachers();
        setTeachers(teachers);
        setLastId(Object.keys(teachers)[Object.keys(teachers).length - 1]);
        setHasMore(Object.keys(teachers).length === 3);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  const loadMoreTeachers = async () => {
    setIsLoading(true);
    try {
      const newTeachers = await getMoreTeachers(lastId);
      setTeachers([...teachers, ...newTeachers]);

      setLastId(Object.keys(newTeachers)[Object.keys(newTeachers).length - 1]);
      setHasMore(Object.keys(newTeachers).length === 3);
    } catch (error) {
      console.error('Error fetching more teachers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" pt-11 pb-4  bg-grayBGN ">
      <div>Filters</div>
      <TeachersList teachers={teachers} />
      {hasMore && (
        <button
          type="button"
          className="block text-center w-[184px] text-lg font-bold text-text bg-accent hover:bg-accentLight py-2 md:py-4 rounded-xl "
          onClick={loadMoreTeachers}
          disabled={isLoading}
        >
          Load more
        </button>
      )}
    </div>
  );
}
