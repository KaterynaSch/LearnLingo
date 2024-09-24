import {
  ref,
  get,
  query,
  orderByKey as orderByChild,
  startAt,
  limitToFirst,
} from 'firebase/database';
import { db } from './firebaseConfig';

const fetchTeachers = async (lastId = null, limit = 4) => {
  const teachersRef = ref(db, 'teachers');

  const teachersQuery = lastId
    ? query(
        teachersRef,
        orderByChild('id'),
        startAt(lastId),
        limitToFirst(limit)
      )
    : query(teachersRef, orderByChild('id'), limitToFirst(limit));

  try {
    const snapshot = await get(teachersQuery);
    const response = [];

    snapshot.forEach(child => {
      const data = child.val();
      response.push(data);
    });

    return response;
  } catch (err) {
    console.log('Error fetching teachers:', err);
    throw err;
  }
};

export const getTeachers = async (limit = 4) => {
  return fetchTeachers(null, limit);
};

export const getMoreTeachers = async (lastId, limit = 4) => {
  return fetchTeachers(lastId, limit);
};
