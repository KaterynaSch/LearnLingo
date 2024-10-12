import { useEffect, useState } from 'react';
import { fetchFavorites, fetchTeacherById, toggleFavorite } from './api';
import { TeachersList } from './TeachersList';
import { auth } from 'firebaseConfig';

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
        console.error('Error fetching favorites:', error);
        throw error;
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
    if (!user) return;

    try {
      await toggleFavorite(user.uid, teacherId, true);
      setFavoriteTeacherIds(prev => prev.filter(id => id !== teacherId));
    } catch (error) {
      console.error('Error removing favorite:', error);
      throw error('Error removing favorite:', error);
    }
  };

  return (
    <div className=" pt-11 pb-4  bg-grayBGN teachers-container">
      <TeachersList
        teachers={favoriteTeachers}
        favorites={favoriteTeacherIds}
        handleFavorite={handleRemoveFromFavorites}
      />
    </div>
  );
};
