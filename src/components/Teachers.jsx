import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import {
  getTeachers,
  getMoreTeachers,
  toggleFavorite,
  fetchFavorites,
} from './api';
import { TeachersList } from './TeachersList';
import { Filters } from './Filters';
import { Loader } from './Loader';
import { useAuth } from 'context/AuthContext';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastId, setLastId] = useState(null);
  const { authUser } = useAuth();
  const [params] = useSearchParams();

  const selectedLanguage = params.get('language') ?? 'all_languages';
  const selectedLevel = params.get('level') ?? 'a1_beginner';
  const selectedPrice = params.get('price') ?? '';

  const totalTeachers = 30;
  const hasMore = teachers.length < totalTeachers;

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
        toast.error('Error fetching teachers');
      } finally {
        setIsLoading(false);
      }
    };

    const getFavorites = async () => {
      if (!authUser) return;
      try {
        const favoritesData = await fetchFavorites(authUser.uid);
        const newFavorites = Object.keys(favoritesData).filter(
          key => favoritesData[key]
        );
        setFavorites(newFavorites);
      } catch (error) {
        toast.error('Error fetching favorite teachers');
      }
    };

    getInitialTeachers();
    getFavorites();
  }, [authUser]);

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
      toast.error('Error fetching more teachers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFavorite = async teacherId => {
    if (!authUser) {
      return toast.error(
        'Please register or sign in to select your favorite teachers'
      );
    }
    try {
      const isFavorite = favorites.includes(teacherId);
      await toggleFavorite(authUser.uid, teacherId, isFavorite);
      setFavorites(prev =>
        isFavorite ? prev.filter(id => id !== teacherId) : [...prev, teacherId]
      );
    } catch (error) {
      toast.error('Error toggling favorite');
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
          level => level.toLowerCase().replace(/[\s-]+/g, '_') === selectedLevel
        );
        const hasPrice =
          selectedPrice === '' || price_per_hour <= selectedPrice;
        return hasLanguage && hasLevel && hasPrice;
      }),
    [selectedLanguage, selectedLevel, selectedPrice, teachers]
  );

  return (
    <div className=" teachers-container">
      <Filters />
      {isLoading ? (
        <Loader />
      ) : visibleTeachers.length > 0 ? (
        <TeachersList
          teachers={visibleTeachers}
          favorites={favorites}
          handleFavorite={handleToggleFavorite}
        />
      ) : (
        <p className="mb-5 md:mb-11 text-base md:text-lg text-center">
          Sorry, no teachers found for your search criteria
        </p>
      )}

      {teachers.length > 0 && hasMore && (
        <button
          type="button"
          className="block text-center w-[184px] text-lg font-bold text-text bg-accent hover:bg-background py-2 md:py-4 rounded-xl "
          onClick={loadMoreTeachers}
          disabled={isLoading}
        >
          Load more
        </button>
      )}
    </div>
  );
}
