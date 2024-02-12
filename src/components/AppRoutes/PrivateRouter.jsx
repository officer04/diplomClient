import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/conts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addAuth, addIsNewUser, addUser } from '../../featers/auth/auth';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const PrivateRouter = () => {
  const location = useLocation();
  const { isAuth } = useSelector(({ auth }) => auth);
  const dispath = useDispatch();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     dispath(addAuth(false));
  //     // navigate(ROUTES.HOME);
  //     return;
  //   }
  //
  //   const user = jwtDecode(token);
  //
  //   if (new Date() < new Date(user.exp * 1000)) {
  //     dispath(addAuth(true));
  //     dispath(addUser(user));
  //   }
  // }, [isAuth]);
  // return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
  // return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
};

export default PrivateRouter;
