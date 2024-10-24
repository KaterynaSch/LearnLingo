import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../pages/HomePage'));
const Teachers = lazy(() => import('../pages/TeachersPage'));
const Favorites = lazy(() => import('../pages/FavoritesPage'));
const NotFound = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
