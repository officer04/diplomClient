import styles from './Header.module.scss';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

const HeaderUser = () => {
  return (
    <header className={styles.header}>
      <Link>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>О школе</li>
          <li>Курсы</li>
        </ul>
      </nav>

      <div className={styles.login}>
        <ul>
          <li>Регистрация</li>
          <li>Войти</li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderUser;
