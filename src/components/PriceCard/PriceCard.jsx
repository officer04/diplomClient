import styles from './PriceCard.module.scss'

const PriceCard = ({btnColor}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.head}>Базовый</h2>
      <ul className={styles.menu}>
        <li>• Бессрочный доступ к учебным материалам</li>
        <li>• Помощь наставника в групповом чате</li>
        <li>• Помощь наставника в групповом чате</li>
        <li>• 14 проектов в портфолио</li>
        <li>• Координаторы помогают в обучении, решают организационные проблемы</li>
        <li>• Интерактивные вебинары</li>
      </ul>
      <div className={styles.text}>
        <div className={styles.price}>
          <p>5 217 ₽ / мес.</p>
          <p>2 869 ₽ / мес.</p>
        </div>
        <div className={styles.conditions}>
          <p>Цена в месяц при рассрочке на 36 месяцев.</p>
          <p>Первый платеж через месяц.</p>
        </div>
        <button className={`${styles.btn} ${btnColor}`}>Выбрать тариф</button>
      </div>
    </div>
  );
};

export default PriceCard;
