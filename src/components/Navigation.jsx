import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { auth } from 'components/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
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

export default function Navigation() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuth(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className=" hidden lg:flex items-center justify-center">
      <ul className="flex flex-col gap-1  items-center justify-center md:flex-row md:gap-2 lg:gap-[28px]">
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/teachers">Teachers</StyledLink>
        </li>
        {isAuth && (
          <li>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
