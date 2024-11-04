import { NavLink } from 'react-router-dom';

import { useAuth } from 'context/AuthContext';
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
  const { authUser } = useAuth();

  return (
    <nav className="flex lg:items-center lg:justify-center">
      <ul className="items-start flex flex-col gap-2 lg:flex-row  lg:items-center justify-center md:gap-4 lg:gap-[28px]">
        <li onClick={onClose}>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li onClick={onClose}>
          <StyledLink to="/teachers">Teachers</StyledLink>
        </li>
        {authUser && (
          <li onClick={onClose}>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
