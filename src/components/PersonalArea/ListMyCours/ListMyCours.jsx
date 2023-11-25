import styles from './ListMyCours.module.scss';

import CardMyCours from '../CardMyCours/CardMyCours';

const ListMyCours = () => {
  return (
    <div className={styles.ListMyCours}>
      <h1 className={styles.title}>Список курсов</h1>
      <div className={styles.wrapper}>
        <CardMyCours
          head="Курс"
          title="Backend-разработчик с нуля до Джуна"
          text="курс для начинающих"
        />
        <CardMyCours
          head="Курс"
          title="Backend-разработчик с нуля до Джуна"
          text="курс для начинающих"
        />
      </div>
    </div>
  );
};

export default ListMyCours;
