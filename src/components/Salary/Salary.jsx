import styles from './Salary.module.scss';

const Salary = ({styleBg}) => {
  return (
    <div className={styles.salary}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={`${styles.head} ${styleBg}`}>
            <p>Более тысячи вакансий на HeadHunter</p>
          </div>
          <div className={`${styles.bottom} ${styleBg}`}>
            <h3>Большая часть вакансий на удалёнке</h3>
            <p>Можно работать из любой точки мира или искать работодателя за рубежом</p>
          </div>
        </div>
        <div className={`${styles.right} ${styleBg}`}>
          <div className={styles.card}>
            <div className={styles.group}>
              <p>60 000 ₽</p>
              <span>Джуниор</span>
            </div>
            <div className={styles.group}>
              <p>120 000 ₽</p>
              <span>Мидл</span>
            </div>
            <div className={styles.group}>
              <p>260 000 ₽</p>
              <span>Сеньёр</span>
            </div>
          </div>
          <p className={styles.text}>
            Хорошие фронтенд-разработчики быстро растут в профессии и в цене
          </p>
        </div>
      </div>
    </div>
  );
};

export default Salary;
