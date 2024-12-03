import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

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
