import styles from './Header.module.scss';
import logo from './../../images/logo.svg';

import { Link } from 'react-router-dom';

const HeaderCourse = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div className={styles.login}>
        <ul>
          <Link to="/signup" className={styles.link}>Регистрация</Link>
          <Link to="/login" className={styles.link}>Войти</Link>
        </ul>
      </div>
    </header>
  );
};

export default HeaderCourse;
