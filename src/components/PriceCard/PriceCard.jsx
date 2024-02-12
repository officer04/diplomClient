import styles from './PriceCard.module.scss';
import Modal from '../Modal/Modal';

const PriceCard = ({modal, setModal, btnColor, title, price }) => {
  return (
    <div className={styles.card}>
      {modal && <Modal setModal={setModal} />}
      <h2 className={styles.head}>{title}</h2>
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
          <p>{price} ₽ / мес.</p>
          <p>2 869 ₽ / мес.</p>
        </div>
        <div className={styles.conditions}>
          <p>Цена в месяц при рассрочке на 36 месяцев.</p>
          <p>Первый платеж через месяц.</p>
        </div>
        <button className={`${styles.btn} ${btnColor}`} onClick={() => setModal(true)}>Выбрать тариф</button>
      </div>
    </div>
  );
};

export default PriceCard;
