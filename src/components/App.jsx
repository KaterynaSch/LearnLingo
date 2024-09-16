import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const TeachersPage = lazy(() => import('../pages/Teachers'));
const FavoritesPage = lazy(() => import('../pages/Favorite'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
