import { ROUTES } from './utils/conts';

import Home from './Pages/Home/Home';
import UserFormLogin from './components/user/UserFormLogin';
import UserFormSignUp from './components/user/UserFormSignUp';
import Frontend from './Pages/Frontend/Frontend';
import Backend from './Pages/Backend/Backend';
import Cours from './Pages/Cours/Cours';
import Account from './components/PersonalArea/Account/Account';
import ListMyCours from './components/PersonalArea/ListMyCours/ListMyCours';
import SingleMyCours from './components/PersonalArea/SingleMyCours/SingleMyCours';
import SingleTasksMyCours from './components/PersonalArea/SingleTasksMyCours/SingleTasksMyCours';
import TaskMyCours from './components/PersonalArea/TaskMyCours/TaskMyCours';
import SingleQuestion from './components/SingleQuestion/SingleQuestion';
import Admin from './components/Admin/Admin';
import ResetPasswordRequest from './components/ResetPasswordRequest/ResetPasswordRequest';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Courses from './components/Admin/Courses/Courses';
import ChangeCours from './components/Admin/ChangeCours/ChangeCours';
import CreateCours from './components/Admin/CreateCours/CreateCours';
import CoursModules from './components/Admin/CoursModules/CoursModules';
import CreateModule from './components/Admin/CreateModule/CreateModule';
import ChangeModule from './components/Admin/ChangeModule/ChangeModule';

export const authRoutes = [
  {
    path: ROUTES.ACCOUNT,
    Component: <Account />,
  },
  {
    path: ROUTES.LIST_MY_COURS,
    Component: <ListMyCours />,
  },
  {
    path: ROUTES.SINGLE_MY_COURS + '/:id',
    Component: <SingleMyCours />,
  },
  {
    path: ROUTES.SINGLE_MY_COURS_TASK + '/:id',
    Component: <SingleTasksMyCours />,
  },
  {
    path: ROUTES.SINGLE_MY_COURS_TASKS + '/:id',
    Component: <TaskMyCours />,
  },
  {
    path: ROUTES.SINGLE_QUESTION,
    Component: <SingleQuestion />,
  },
  {
    path: ROUTES.ADMIN,
    Component: <Admin />,
  },
  {
    path: ROUTES.FRONTEND,
    Component: <Frontend />,
  },
  {
    path: ROUTES.BACKEND,
    Component: <Backend />,
  },
];

export const adminRoutes = [
  {
    path: ROUTES.COURSES_ADMIN,
    Component: <Courses />,
  },
  {
    path: ROUTES.MODULES_ADMIN + "/:id",
    Component: <CoursModules />,
  },
  {
    path: ROUTES.CREATE_COURS,
    Component: <CreateCours />,
  },
  {
    path: ROUTES.CREATE_MODULE + "/:id",
    Component: <CreateModule />,
  },
  {
    path: ROUTES.CHANGE_COURS + '/:id',
    Component: <ChangeCours />,
  },
  {
    path: ROUTES.CHANGE_MODULE + '/:id',
    Component: <ChangeModule />,
  },

];

export const publicRoutes = [
  {
    path: ROUTES.HOME,
    Component: <Home />,
  },
  {
    path: ROUTES.LOGIN,
    Component: <UserFormLogin />,
  },
  {
    path: ROUTES.REGISTRATION,
    Component: <UserFormSignUp />,
  },
  {
    path: ROUTES.FRONTEND,
    Component: <Frontend />,
  },
  {
    path: ROUTES.BACKEND,
    Component: <Backend />,
  },
  {
    path: ROUTES.COURS,
    Component: <Cours />,
  },
  {
    path: ROUTES.SINGLE_QUESTION,
    Component: <SingleQuestion />,
  },
  {
    path: ROUTES.RESET_PASSWORD + '/:id',
    Component: <ResetPassword />,
  },
  {
    path: ROUTES.RESET_PASSWORD_REQUEST,
    Component: <ResetPasswordRequest />,
  },
];
