import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FiXSquare } from 'react-icons/fi';
import { jwtDecode } from 'jwt-decode';
import exclamation from './../../images/exclamation.svg';

import styles from './ModalAccount.module.scss';
import { addUser, changeUser, getRole, toggleModal } from '../../featers/auth/auth';
import { useState } from 'react';
import Button from '../UI/button/Button';

const ModalAccount = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => auth);
  const [err, setErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
    },
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    setIsLoading(true);
    dispatch(changeUser(data)).then((error) => {
      console.log(error);
      // if (response.payload.response?.status === 400 || response.payload.response?.status === 401) {
      //   setErr(response.payload.response.data.message);
      //   setIsLoading(false);
      //   reset();
      // }

      // if (response.payload?.status === 200) {
      //   const token = response.payload.data.token;
      //   const user = jwtDecode(token);
      //   localStorage.setItem('token', token);
      //   dispatch(addUser(user));
      //   dispatch(getRole(user.role));
      //   dispatch(toggleModal(false));
      //   setIsLoading(false);
      // }
    });
  };
  return (
    <div className={styles.modal}>
      <div className={styles.card}>
        <button className={styles.square} onClick={() => dispatch(toggleModal(false))}>
          <FiXSquare size={30} />
        </button>
        <h3 className={styles.title}>Личный кабинет</h3>
        <p className={styles.err}>{err}</p>
        <form className={styles.info} onSubmit={handleSubmit(onSubmit)}>
          <label>
            <h3>Имя</h3>
            <input
              className={styles.input}
              placeholder="Ввведите новое имя"
              {...register('username', {
                required: 'Поля обязательное к заполнению',
                minLength: {
                  value: 5,
                  message: 'Минимум 5 символов в имени',
                },
              })}
            />
            {errors?.username && (
              <div className={styles.exclamation}>
                <img src={exclamation} />
                <p>{errors.username.message}</p>
              </div>
            )}
          </label>

          <label>
            <h3>Электронная почта</h3>
            <input
              className={styles.input}
              placeholder="Ввведите новый емейл"
              {...register('email', {
                required: 'Поля обязательное к заполнению',
                pattern: {
                  value:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                  message: 'Почта указана не верно',
                },
              })}
            />
            {errors?.email && (
              <div className={styles.exclamation}>
                <img src={exclamation} />
                <p>{errors.email.message}</p>
              </div>
            )}
          </label>
          <label>
            <h3>Введите ваш новый пароль</h3>
            <input
              placeholder="Ввведите новый пароль"
              className={styles.input}
              type="password"
              {...register('newPassword', {
                // required: 'Поля обязательное к заполнению',
                pattern: {
                  value: /^(?=.*\d)\w{3,20}$/m,
                  message:
                    'Пароль должен состоять из ластинских букв и цифр длина от 3 до 20 символов',
                },
              })}
            />
            {errors?.newpassword && (
              <div className={styles.exclamation}>
                <img src={exclamation} />
                <p>{errors.newpassword.message}</p>
              </div>
            )}
          </label>
          <label>
            <h3>Введите ваш пароль</h3>
            <input
              className={styles.input}
              placeholder="Ввведите новый емейл"
              type="password"
              {...register('password', {
                required: 'Поля обязательное к заполнению',
                pattern: {
                  value: /^(?=.*\d)\w{3,20}$/m,
                  message:
                    'Пароль должен состоять из ластинских букв и цифр длина от 3 до 20 символов',
                },
              })}
            />
            {errors?.password && (
              <div className={styles.exclamation}>
                <img src={exclamation} />
                <p>{errors.password.message}</p>
              </div>
            )}
          </label>
          <Button disabled={!isValid || isLoading} styleWidth={styles.btnWidth}>
            Сохранить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalAccount;
