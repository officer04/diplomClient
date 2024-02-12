import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../../routes';
import { useDispatch } from 'react-redux';
import { addAuth, addIsNewUser, addUser } from '../../featers/auth/auth';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

import PrivateRouter from './PrivateRouter';
import NotfoundPage from '../NotfoundPage/NotfoundPage';

const AppRoutes = () => {
 
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route element={<PrivateRouter  />}>
        {authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Route>
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
