import { useEffect, useState } from 'react';

import { TeachersList } from './TeachersList';
import { getTeachers, getMoreTeachers } from './api';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastId, setLastId] = useState(null);

  const totalTeachers = 30;
  const hasMore = teachers.length < totalTeachers;

  useEffect(() => {
    const fetchTeachers = async () => {
      setIsLoading(true);
      try {
        const result = await getTeachers();
        setTeachers(result);
        if (result.length > 0) {
          const newLastId = result[result.length - 1].id;
          setLastId(newLastId);
        }
      } catch (err) {
        throw new Error('Error fetching teachers');
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeachers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreTeachers = async () => {
    if (!teachers.length || !lastId) return;

    setIsLoading(true);
    try {
      const newTeachers = await getMoreTeachers(lastId);
      setTeachers(prev => [...prev, ...newTeachers]);
      if (newTeachers.length > 0) {
        const newLastId = newTeachers[newTeachers.length - 1].id;
        setLastId(newLastId);
      }
    } catch (err) {
      throw new Error('Error fetching more teachers:');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" pt-11 pb-4  bg-grayBGN teachers-container">
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
