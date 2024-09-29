import { useEffect, useState } from 'react';

import { TeachersList } from './TeachersList';
import { getTeachers, getMoreTeachers } from './api';
import { Filters } from './Filters';
import { useSearchParams } from 'react-router-dom';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastId, setLastId] = useState(null);
  const [params] = useSearchParams();
  const selectedLanguage = params.get('language') ?? 'all_languages';
  const selectedLlevel = params.get('level') ?? 'a1_beginner';
  const selectedPrice = params.get('price') ?? '';

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

  const visibleTeachers = teachers.filter(
    ({ languages, levels, price_per_hour }) => {
      const hasLanguage =
        selectedLanguage === 'all_languages' ||
        languages.some(
          lang =>
            lang.toLowerCase().replace(/[\s-]+/g, '_') === selectedLanguage
        );
      const hasLevel = levels.some(
        level => level.toLowerCase().replace(/[\s-]+/g, '_') === selectedLlevel
      );
      const hasPrice = selectedPrice === '' || price_per_hour <= selectedPrice;
      return hasLanguage && hasLevel && hasPrice;
    }
  );

  return (
    <div className=" pt-11 pb-4  bg-grayBGN teachers-container">
      <Filters />
      <TeachersList teachers={visibleTeachers} />
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
