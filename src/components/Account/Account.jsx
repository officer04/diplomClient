import styles from './Account.module.scss';
import bg from './../../images/bg.svg'

const Account = () => {
  return (
    <div className={styles.account}>
      <div className={styles.text}>
        <h1>Не знаете с чего начать?</h1>
        <p>Откройте для себя что-то новое, пройдите тест и решите какой курс подойдёт именно вам</p>
        <button>Тык сюда</button>
      </div>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Account;
