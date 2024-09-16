import { Auth } from './Auth';
import { Logo } from './Logo';
import Navigation from './Navigation';

export const Header = () => {
  return (
    <header className=" flex flex-row justify-around items-center mb-5 h-12">
      <Logo />
      <Navigation />
      <Auth />
    </header>
  );
};