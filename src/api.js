import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { db } from './firebaseConfig';

export const getTeachers = async () => {
  const res = await axios.get(
    `https://${process.env.FIREBASE_DATABASE_URL}/teachers.json?orderBy="key"&limitToFirst=3`
  );
  return res.data;
};

export const getMoreTeachers = async lastId => {
  const res = await axios.get(
    `https://${process.env.FIREBASE_DATABASE_URL}/teachers.json?orderBy="key"&startAt="${lastId}"&limitToFirst=3`
  );
  return res.data;
};

// export const UpdateTeachers = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const dbRef = db.ref('teachers');

//     dbRef.once('value', snapshot => {
//       const teachers = snapshot.val();

//       // Додавання id до кожного вчителя
//       Object.keys(teachers).forEach(key => {
//         teachers[key].id = Date.now();
//       });

//       // Оновлення бази даних
//       dbRef.set(teachers);
//       setIsLoading(false);
//     });
//   }, []);

//   return (
//     <div>
//       {isLoading && <p>Завантаження...</p>}
//       {isLoading ? <p>Завантаження...</p> : <p>База даних оновлена!</p>}
//     </div>
//   );
// };
