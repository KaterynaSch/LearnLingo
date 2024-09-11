import { NavLink } from 'react-router-dom';
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
  return (
    <nav className=" hidden lg:flex items-center justify-center">
      <ul className="flex flex-col gap-1 md:flex-row md:gap-2 items-center justify-center ">
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/teachers">Teachers</StyledLink>
        </li>
        <li>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </li>
      </ul>
    </nav>
  );
}
