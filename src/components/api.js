import {
  ref,
  get,
  query,
  orderByKey,
  startAt,
  limitToFirst,
} from 'firebase/database';
import { db } from './firebaseConfig';

const fetchTeachers = async (lastId, limit = 4) => {
  const teachersRef = ref(db, 'teachers');

  const teachersQuery = lastId
    ? query(
        teachersRef,
        orderByKey('id'),
        startAt(lastId),
        limitToFirst(limit + 1)
      )
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
