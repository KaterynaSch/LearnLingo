import {
  ref,
  get,
  query,
  orderByKey,
  startAt,
  limitToFirst,
  update,
} from 'firebase/database';
import { db } from 'firebaseConfig';

const fetchTeachers = async (lastId, limit = 4) => {
  const teachersRef = ref(db, 'teachers');

  const teachersQuery = lastId
    ? query(teachersRef, orderByKey(), startAt(lastId), limitToFirst(limit + 1))
    : query(teachersRef, orderByKey('id'), limitToFirst(limit));

  try {
    const snapshot = await get(teachersQuery);
    const response = [];

    snapshot.forEach(key => {
      const data = key.val();
      response.push(data);
    });

    return lastId ? response.slice(1) : response;
  } catch (err) {
    throw err;
  }
};

export const getTeachers = async (limit = 4) => {
  return fetchTeachers(null, limit);
};

export const getMoreTeachers = async (lastId, limit = 4) => {
  return fetchTeachers(lastId, limit);
};

export const fetchTeacherById = async teacherId => {
  const teacherRef = ref(db, `teachers/${teacherId}`);

  try {
    const snapshot = await get(teacherRef);
    if (snapshot.exists()) {
      return { id: teacherId, ...snapshot.val() };
    } else {
      console.log(`No teacher found for ID: ${teacherId}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching teacher with ID: ${teacherId}`, error);
    return null;
  }
};

export const fetchFavorites = async userId => {
  const userRef = ref(db, `users/${userId}/favorites`);
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};

export const toggleFavorite = async (userId, teacherId, isFavorite) => {
  const userFavoritesRef = ref(db, `users/${userId}/favorites`);
  if (isFavorite) {
    await update(userFavoritesRef, { [teacherId]: null });
  } else {
    await update(userFavoritesRef, { [teacherId]: true });
  }
};
