import styles from './Header.module.scss';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

const HeaderLogin = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </Link>
    </header>
  );
};

export default HeaderLogin;
