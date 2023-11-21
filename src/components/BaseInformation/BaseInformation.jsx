import styles from './BaseInformation.module.scss';

import image from './../../images/image.png';

const BaseInformation = ({title, description, titleColor, btnColor}) => {
  return (
    <div className={styles.baseInformation}>
      <h1 className={`${styles.title} ${titleColor}`}>
        {/* <span>Frontend- разработчик <br /> </span>с нуля до Джуна */}
        {title}
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.description}>
            {description.map((item) => <p>{item}</p>)}
            {/* <p>
              Научитесь создавать сайты и приложения, проектировать интерфейсы и работать с Flexbox
              и JavaScript
            </p>
            <p>Соберите портфолио из 5 проектов</p>
            <p>Начните работать по специальности через 6 месяцев обучения</p> */}
          </div>
          <button className={`${styles.btn} ${btnColor}`}>Записаться</button>
        </div>
        <div className={styles.img}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.item}>
          <h4>Когда</h4>
          <p>7 ноября год - 5 июня 2025 год</p>
        </div>
        <div className={styles.item}>
          <h4>Длительность</h4>
          <p>12 месяцев</p>
        </div>
        <div className={styles.item}>
          <h4>Формат обучения</h4>
          <p>Вебинары, видеолекции, практические задания</p>
        </div>
      </div>
    </div>
  );
};

export default BaseInformation;
