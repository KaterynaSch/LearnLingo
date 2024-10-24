import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

import { auth } from 'firebaseConfig';
import { fetchFavorites, fetchTeacherById, toggleFavorite } from './api';
import { TeachersList } from './TeachersList';

export const Favorites = () => {
  const [favoriteTeacherIds, setFavoriteTeacherIds] = useState([]);
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const getFavorites = async () => {
      if (!user) return;
      try {
        const favoritesData = await fetchFavorites(user.uid);
        const newIds = Object.keys(favoritesData).filter(
          key => favoritesData[key]
        );
        setFavoriteTeacherIds(newIds);
      } catch (error) {
        toast.error('Error fetching favorite teachers');
      }
    };
    getFavorites();
  }, [user]);

  useEffect(() => {
    const getFavoriteTeachers = async () => {
      const teachers = [];
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
    };

    getFavoriteTeachers();
  }, [favoriteTeacherIds]);

  const handleRemoveFromFavorites = async teacherId => {
    if (!user) {
      toast.error('Please, sign in for remove teachters from favorites');
      return;
    }

    try {
      await toggleFavorite(user.uid, teacherId, true);
      setFavoriteTeacherIds(prev => prev.filter(id => id !== teacherId));
    } catch (error) {
      toast.error('Error removing favorite');
    }
  };

  return (
    <div className=" teachers-container">
      {favoriteTeachers.length !== 0 ? (
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
