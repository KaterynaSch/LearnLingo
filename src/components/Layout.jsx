import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <div className=" pt-5 w-full min-h-screen my-0 mx-auto">
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
