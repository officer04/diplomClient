import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './UserFormLogin.module.scss';
import { loginUser } from '../../featers/auth/auth';
import addIsloading from '../../featers/auth/auth';

const UserFormLogin = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: '', pasword: '' });
  const {isLoading} = useSelector(({auth}) => auth)

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
    console.log(state)
  };

  const handleClick = () => {
    // const cat = dispatch(loginUser(state))
    // cat.then((x) => console.log(x.payload))
    dispatch(loginUser(state))
    // dispatch(addIsloading(true));
  };
  return (
    <section className={styles.signUp}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Добро пожаловать!</h1>
          <p>Войдите, чтобы получить доступ к панели инструментов, настройкам и проектам.</p>
        </div>
        <div className={styles.body}>
          <div className={styles.group}>
            <p>Электронная почта</p>
            <input
              type="text"
              name="username"
              placeholder="Введите вашу почту"
              value={state.username}
              onChange={handleChange}
            />
          </div>
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

          <button className={styles.button} onClick={handleClick}>
            Войти
          </button>
          <p className={styles.text}>
            У вас есть аккаунт?{' '}
            <Link to="/signup">
              <span>Зарегистрироваться</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserFormLogin;
