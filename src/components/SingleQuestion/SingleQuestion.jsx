import { Link } from 'react-router-dom';
import styles from './SingleQuestion.module.scss';

const SingleQuestion = () => {
  return (
    <div className={styles.singleQuestion}>
      <div className={styles.card}>
        <h1 className={styles.title}>Я в большей степени интересуюсь?</h1>
        <div className={styles.wrapper}>
          <div className={styles.group}>
            <label>
              <input type="radio" id="input" name="input" />
              Всем, что связано с компьютерами
            </label>
          </div>
          <div className={styles.group}>
            <label>
              <input type="radio" id="input" name="input" />
              Рекламой, маркетингом, бизнесом
            </label>
          </div>
          <div className={styles.group}>
            <label>
              <input type="radio" id="input" name="input" />
              Вопросами лидерства и психологией
            </label>
          </div>
          <div className={styles.group}>
            <label>
              <input type="radio" id="input" name="input" />
              Мастерить что-то красивое или полезное
            </label>
          </div>
        </div>
      </div>
      <div className={styles.wrapperBtn}>
        <div className={styles.cardBtn}>
          <Link>Назад</Link>
          <p>1/10</p>
          <Link>Далее</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
