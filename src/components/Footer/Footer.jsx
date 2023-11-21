import {Link} from 'react-router-dom'

import styles from './Footer.module.scss';

import logo from './../../images/logo.svg'
import youtube from './../../images/youtube.svg';
import vk from './../../images/vk.svg';
import telegram from './../../images/telegram.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <nav className={styles.nav}>
        <h3>Направление</h3>
        <Link to='/cours'>Курсы</Link>
      </nav>

      <div className={styles.messenger}>
        <h3>Подпишитесь</h3>
        <ul>
          <li>
            <a href="https://youtube.com">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="https://vk.com">
              <img src={vk} alt="vk" />
            </a>
          </li>
          <li>
            <a href="https://letegram.com">
              <img src={telegram} alt="telegram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
