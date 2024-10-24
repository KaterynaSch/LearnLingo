import { auth } from 'firebaseConfig';
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({ children }) {
  const user = auth.currentUser;

  return !user ? <Navigate to="*" /> : children;
}
