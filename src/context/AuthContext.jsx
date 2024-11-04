import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from 'firebaseConfig';
import toast from 'react-hot-toast';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      setAuthUser(user || null);
    });
    return () => listen();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success('You have successfully logged out');
    } catch (error) {
      toast.error('Error logout');
    }
  };

  return (
    <AuthContext.Provider value={{ authUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
