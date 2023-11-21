import { Link } from 'react-router-dom';
import styles from './UserFormSignUp.module.scss';
import { useState } from 'react';
import { addUser, createUser } from './../../featers/auth/auth';
import { useSelector, useDispatch } from 'react-redux';

const UserFormSignUp = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ username: '', password: '' });

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const handleClick = () => {
    // dispatch(createUser(state));
    // dispatch(addUser(state));
    dispatch(createUser(state))
    // .then((x) => dispatch(x.payload))
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Добро пожаловать!</h1>
          <p>
            Зарегистрируйтесь, чтобы получить доступ к панели инструментов, настройкам и проектам.
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.group}>
            <p>Имя</p>
            <input
              type="text"
              name="username"
              placeholder="Введите ваше имя"
              value={state.username}
              onChange={handleChange}
            />
          </div>
          {/* <div className={styles.group}>
            <p>Электронная почта</p>
            <input
              type="text"
              name="email"
              placeholder="Введите вашу почту"
              value=""
              onChange={handleChange}
            />
          </div> */}
          <div className={styles.group}>
            <p>Пароль</p>
            <input
              type="text"
              name="password"
              placeholder="Введите ваш пароль"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          {/* <div className={styles.group}>
            <p>Повторите пароль</p>
            <input
              type="text"
              name="repeatpassword"
              placeholder="Повторите ваш пароль"
              value=""
              onChange={() => {}}
            />
          </div> */}

          <button className={styles.button} onClick={handleClick}>
            Зарегистрироваться
          </button>
          <p className={styles.text}>
            У вас есть аккаунт?{' '}
            <Link to="/login">
              <span>Войти</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserFormSignUp;
