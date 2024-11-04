import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import { auth } from 'firebaseConfig';
import { fetchFavorites, fetchTeacherById, toggleFavorite } from './api';
import { TeachersList } from './TeachersList';
import { Loader } from './Loader';

export const Favorites = () => {
  const [favoriteTeacherIds, setFavoriteTeacherIds] = useState([]);
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingFavorites, setIsFetchingFavorites] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    const getFavoriteIds = async () => {
      if (!user) return;
      try {
        const favoritesData = await fetchFavorites(user.uid);
        const newIds = Object.keys(favoritesData).filter(
          key => favoritesData[key]
        );
        setFavoriteTeacherIds(newIds);
      } catch (error) {
        toast.error('Error fetching favorite teachers');
      } finally {
        setIsFetchingFavorites(false);
      }
    };
    getFavoriteIds();
  }, [user]);

  useEffect(() => {
    const getFavoriteTeachers = async () => {
      setIsLoading(true);
      const teachers = [];
      try {
        if (favoriteTeacherIds.length > 0) {
          for (const teacherId of favoriteTeacherIds) {
            const teacherData = await fetchTeacherById(teacherId);
            if (teacherData) {
              teachers.push(teacherData);
            }
          }
          setFavoriteTeachers(teachers);
        } else {
          setFavoriteTeachers([]);
        }
      } catch (error) {
        toast.error('Error fetching teacher data');
      } finally {
        setIsLoading(false);
      }
    };
    if (!isFetchingFavorites) {
      getFavoriteTeachers();
    }
  }, [favoriteTeacherIds, isFetchingFavorites]);

  const handleRemoveFromFavorites = async teacherId => {
    if (!user) {
      toast.error('Please, sign in for removing teachers from favorites');
      return;
    }

    try {
      await toggleFavorite(user.uid, teacherId, true);
      setFavoriteTeacherIds(prev => prev.filter(id => id !== teacherId));
    } catch (error) {
      toast.error('Error removing from favorites');
    }
  };

  return (
    <div className=" teachers-container">
      {isLoading || isFetchingFavorites ? (
        <Loader />
      ) : favoriteTeachers.length > 0 ? (
        <TeachersList
          teachers={favoriteTeachers}
          favorites={favoriteTeacherIds}
          handleFavorite={handleRemoveFromFavorites}
        />
      ) : (
        <p className="mb-5 md:mb-11 text-base md:text-lg text-center">
          Sorry, there are no favorite teachers yet. You can add some from the{' '}
          <Link to="/teachers" className="text-accent font-semibold">
            Teachers page
          </Link>
        </p>
      )}
    </div>
  );
};
