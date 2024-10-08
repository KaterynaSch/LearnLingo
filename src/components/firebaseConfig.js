import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyCPsvd6WMVUwuSxNmiexYSPUOSKxBVXJBI',
  authDomain: 'learnlingo-4a1ad.firebaseapp.com',
  databaseURL:
    'https://learnlingo-4a1ad-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learnlingo-4a1ad',
  storageBucket: 'learnlingo-4a1ad.appspot.com',
  messagingSenderId: '116756782281',
  appId: '1:116756782281:web:d9f3cf598ecbcbe44e8118',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
