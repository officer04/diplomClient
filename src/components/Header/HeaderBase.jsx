import styles from './Header.module.scss';
import logo from './../../images/logo.svg';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/conts';

const HeaderBase = () => {
  const location = useLocation();
  const login = location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTRATION;
  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>

      {!login ? (
        <>
          <nav className={styles.nav}>
            <ul>
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                О школе
              </NavLink>
              <NavLink
                to={ROUTES.COURS}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                Курсы
              </NavLink>
            </ul>
          </nav>

          <div className={styles.login}>
            <ul>
              <Link to={ROUTES.REGISTRATION} className={styles.link}>
                Регистрация
              </Link>
              <Link to={ROUTES.LOGIN} className={styles.link}>
                Войти
              </Link>
            </ul>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default HeaderBase;
