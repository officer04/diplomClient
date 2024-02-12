import styles from './Account.module.scss';
import bg from './../../../images/bg.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/conts';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ModalAccount from '../../ModalAccount/ModalAccount';

const Account = () => {
  const { isModalAccount } = useSelector(({ auth }) => auth);
  document.title = 'Личный кабинет';

  return (
    <div className={styles.account}>
      {isModalAccount && <ModalAccount />}
      <div className={styles.text}>
        <h1>Не знаете с чего начать?</h1>
        <p>Откройте для себя что-то новое, пройдите тест и решите какой курс подойдёт именно вам</p>
        <Link to={ROUTES.SINGLE_QUESTION}>Тык сюда</Link>
      </div>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Account;
