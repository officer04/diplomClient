import styles from './Header.module.scss';
import logo from './../../images/logo.svg';

import { Link, NavLink, useLocation } from 'react-router-dom';

const HeaderBase = () => {
  const location = useLocation()
  return (
    <header className={styles.header}>
      <Link to='/'>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <NavLink to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>О школе</NavLink>
          <NavLink to="cours" className={`${styles.link} ${location.pathname === '/cours' ? styles.active : ''}`}>Курсы</NavLink>
        </ul>
      </nav>

      <div className={styles.login}>
        <ul>
          <Link to="/signup" className={styles.link}>Регистрация</Link>
          <Link to="/login" className={styles.link}>Войти</Link>
        </ul>
      </div>
    </header>
  );
};

export default HeaderBase;
