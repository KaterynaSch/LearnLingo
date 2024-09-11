import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div className=" container pt-5 pb-8 w-full h-full my-0 mx-auto">
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
