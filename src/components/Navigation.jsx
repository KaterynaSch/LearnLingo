import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebaseConfig';
const StyledLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? 'text-accent' : 'text-text'} text-lg `
      }
    >
      {children}
    </NavLink>
  );
};

export default function Navigation({ onClose }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuth(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="flex lg:items-center lg:justify-center">
      <ul className="items-start flex flex-col gap-2 lg:flex-row  lg:items-center justify-center md:gap-4 lg:gap-[28px]">
        <li onClick={onClose}>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li onClick={onClose}>
          <StyledLink to="/teachers">Teachers</StyledLink>
        </li>
        {isAuth && (
          <li onClick={onClose}>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
