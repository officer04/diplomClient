import styles from './ListCours.module.scss';
import bg from './../../images/bgs.png';


const ListCours = () => {
  return (
    <div className={styles.listCours}>
      <h1 className={styles.title}>Список курсов</h1>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.text}>
            <span>Курс</span>
            <h2>Frontend-разработчик с нуля до Джуна</h2>
            <p>курс для начинающих</p>
          </div>
          <img src={bg} className={styles.img} alt="" />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <span>Курс</span>
            <h2>Backend-разработчик с нуля до Джуна</h2>
            <p>курс для начинающих</p>
          </div>
          <img src={bg} className={styles.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ListCours;
