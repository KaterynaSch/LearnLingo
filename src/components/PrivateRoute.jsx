import { Navigate } from 'react-router-dom';

import { auth } from 'firebaseConfig';
export default function PrivateRoute({ children }) {
  const user = auth.currentUser;

  return !user ? <Navigate to="*" /> : children;
}
