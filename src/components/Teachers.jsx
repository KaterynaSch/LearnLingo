import { useEffect, useMemo, useState } from 'react';
import { auth } from 'firebaseConfig';
import { TeachersList } from './TeachersList';
import {
  getTeachers,
  getMoreTeachers,
  toggleFavorite,
  fetchFavorites,
} from './api';
import { Filters } from './Filters';
import { useSearchParams } from 'react-router-dom';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastId, setLastId] = useState(null);
  const [params] = useSearchParams();
  const selectedLanguage = params.get('language') ?? 'all_languages';
  const selectedLlevel = params.get('level') ?? 'a1_beginner';
  const selectedPrice = params.get('price') ?? '';

  const totalTeachers = 30;
  const hasMore = teachers.length < totalTeachers;
  const user = auth.currentUser;

  useEffect(() => {
    const getInitialTeachers = async () => {
      setIsLoading(true);
      try {
        const result = await getTeachers();
        setTeachers(result);
        if (result.length > 0) {
          const newLastId = result[result.length - 1].id;
          setLastId(newLastId);
        }
      } catch (error) {
        console.error('Error fetching teachers:', error);
        throw error('Error fetching teachers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const getFavorites = async () => {
      if (!user) return;
      try {
        const favoritesData = await fetchFavorites(user.uid);
        const newFavorites = Object.keys(favoritesData).filter(
          key => favoritesData[key]
        );
        setFavorites(newFavorites);
      } catch (error) {
        console.error('Error fetching favorites:', error);
        throw error('Error fetching favorites:', error);
      }
    };

    getInitialTeachers();
    getFavorites();
  }, [user]);

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
    } catch (error) {
      console.error('Error fetching more teachers:', error);
      throw error('Error fetching more teachers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFavorite = async teacherId => {
    if (!user) return;
    try {
      const isFavorite = favorites.includes(teacherId);
      await toggleFavorite(user.uid, teacherId, isFavorite);
      setFavorites(prev =>
        isFavorite ? prev.filter(id => id !== teacherId) : [...prev, teacherId]
      );
    } catch (error) {
      console.error('Error toggling favorite:', error);
      throw error('Error toggling favorite:', error);
    }
  };

  const visibleTeachers = useMemo(
    () =>
      teachers.filter(({ languages, levels, price_per_hour }) => {
        const hasLanguage =
          selectedLanguage === 'all_languages' ||
          languages.some(
            lang =>
              lang.toLowerCase().replace(/[\s-]+/g, '_') === selectedLanguage
          );
        const hasLevel = levels.some(
          level =>
            level.toLowerCase().replace(/[\s-]+/g, '_') === selectedLlevel
        );
        const hasPrice =
          selectedPrice === '' || price_per_hour <= selectedPrice;
        return hasLanguage && hasLevel && hasPrice;
      }),
    [selectedLanguage, selectedLlevel, selectedPrice, teachers]
  );

  return (
    <div className=" pt-11 pb-4  bg-grayBGN teachers-container">
      <Filters />
      <TeachersList
        teachers={visibleTeachers}
        favorites={favorites}
        handleFavorite={handleToggleFavorite}
      />
      {teachers.length > 0 && hasMore && (
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
