import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loginUser } from '../../featers/auth/auth';
import addIsloading from '../../featers/auth/auth';

import styles from './UserFormLogin.module.scss';

const UserFormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState('');
  const [state, setState] = useState({ username: '', password: '' });
  const { isLoading } = useSelector(({ auth }) => auth);

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };
  // console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const cat = dispatch(loginUser(state))
    // cat.then((x) => console.log(x.payload))
    dispatch(loginUser(state)).then((response) => {
      console.log(response);
      if (response.payload.response.status === 400) {
        setErr(response.payload.response.data.message)
      }

      if (response.payload.status === 200) {
        navigate('/account');
      }
    });

    // dispatch(addIsloading(true));
  };
  return (
    <section className={styles.signUp}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1>Добро пожаловать!</h1>
          <p>Войдите, чтобы получить доступ к панели инструментов, настройкам и проектам.</p>
        </div>
        <p className={styles.err}>{err}</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label>
              <p>Электронная почта</p>
              <input
                type="text"
                name="username"
                placeholder="Введите вашу почту"
                value={state.username}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={styles.group}>
            <label>
              <p>Пароль</p>
              <input
                type="text"
                name="password"
                placeholder="Введите ваш пароль"
                value={state.password}
                onChange={handleChange}
              />
            </label>
          </div>

          <button className={styles.button}>Войти</button>
        </form>
        <p className={styles.text}>
          У вас есть аккаунт?{' '}
          <Link to="/signup">
            <span>Зарегистрироваться</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default UserFormLogin;
