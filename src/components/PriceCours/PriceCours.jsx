import PriceCard from '../PriceCard/PriceCard';
import styles from './PriceCours.module.scss';

const PriceCours = ( {btnColor}) => {
  return (
    <div className={styles.priceCours}>
      <h1 className={styles.title}>Выберите свой тариф</h1>
      <p className={styles.subtitle}>
        Наши координаторы помогают в обучении, решают организационные проблемы
      </p>
      <div className={styles.wrapper}>
        <PriceCard btnColor={btnColor}/>
        <PriceCard/>
        <PriceCard/>
      </div>
    </div>
  );
};

export default PriceCours;
