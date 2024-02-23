import styles from './Header.module.scss';
import logo from './../../images/logo.svg';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/conts';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, toggleModal } from '../../featers/auth/auth';
import { isAction } from '@reduxjs/toolkit';

const HeaderAuth = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { user } = useSelector(({ auth }) => auth);
  const logOut = () => {
    localStorage.getItem('token');
    localStorage.removeItem('token');
    dispath(addAuth(false));
    navigate(ROUTES.HOME);
  };
  return (
    <header className={styles.header}>
      <Link to={user.role === 'ADMIN' ? ROUTES.COURSES_ADMIN : ROUTES.ACCOUNT}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
      {user.role === 'ADMIN' ? null : (
        <div className={styles.menu}>
          <NavLink
            to={ROUTES.ACCOUNT}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Гланая
          </NavLink>
          <NavLink
            to={ROUTES.LIST_MY_COURS}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Все курсы
          </NavLink>
        </div>
      )}

      {/* {user.role === 'ADMIN' ||
        ('USER' && (
          <div className={styles.wrapper}>
            <p className={styles.user} onClick={() => dispath(toggleModal(true))}>
              {user.username}
            </p>
            <p className={styles.logOut} onClick={logOut}>
              Выйти
            </p>
          </div>
        ))} */}
      <div className={styles.wrapper}>
        <p className={styles.user} onClick={() => dispath(toggleModal(true))}>
          {user.username}
        </p>
        <p className={styles.logOut} onClick={logOut}>
          Выйти
        </p>
      </div>
    </header>
  );
};

export default HeaderAuth;
