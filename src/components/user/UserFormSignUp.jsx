import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './UserFormSignUp.module.scss';
import { useState } from 'react';
import { addUser, createUser } from './../../featers/auth/auth';
import { useSelector, useDispatch } from 'react-redux';

const UserFormSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState('');
  const [state, setState] = useState({ username: '', password: '' });

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(state))
      .then((response) => {
        // console.log(response.payload.response)

        // console.log(response.payload.status)
        // console.log(response.payload.response.data.message);
        if (response.payload.response.status === 400) {
          setErr(response.payload.response.data.message)
        }

        if (response.payload.status === 200) {
          navigate('/account');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Добро пожаловать!</h1>
          <p>
            Зарегистрируйтесь, чтобы получить <br /> доступ к панели инструментов, настройкам и
            проектам.
          </p>
        </div>
        <p className={styles.err}>{err}</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label>
              <p>Имя</p>
              <input
                type="text"
                name="username"
                placeholder="Введите ваше имя"
                value={state.username}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* <div className={styles.group}>
            <label>
              <p>Электронная почта</p>
              <input
                type="text"
                name="email"
                placeholder="Введите вашу почту"
                value=""
                onChange={handleChange}
              />
            </label>
          </div> */}
          <div className={styles.group}>
            <label>
              <p>Пароль</p>
              <input
                type="password"
                name="password"
                placeholder="Введите ваш пароль"
                value={state.password}
                onChange={handleChange}
              />
            </label>
          </div>
          {/* <div className={styles.group}>
            <label>
              <p>Повторите пароль</p>
              <input
                type="text"
                name="repeatpassword"
                placeholder="Повторите ваш пароль"
                value=""
                onChange={() => {}}
              />
            </label>
          </div> */}

          <button className={styles.button}>Зарегистрироваться</button>
        </form>
        <p className={styles.text}>
          У вас есть аккаунт?{' '}
          <Link to="/login">
            <span>Войти</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default UserFormSignUp;
