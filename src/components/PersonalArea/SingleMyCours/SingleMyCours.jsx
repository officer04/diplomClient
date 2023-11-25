import CardLearnMyCours from './../CardLearnMyCours/CardLearnMyCours';
import CardMyCours from './../CardMyCours/CardMyCours';

import styles from './SingleMyCours.module.scss';
import {Link} from "react-router-dom"

import leftCircle from './../../../images/arrow-left-circle.svg';

const SingleMyCours = () => {
  return (
    <div className={styles.singleMyCours}>

      <Link to="/my-cours" className={styles.back}>
        <img src={leftCircle} alt="" />
        <p>Назад</p>
      </Link>
      <div className={styles.card}>
        <CardMyCours
          head="Курс"
          title="Backend-разработчик с нуля до Джуна"
          text="курс для начинающих"
          style={styles.cardWidth}
        />
      </div>
      <div className={styles.wrapper}>
        <CardLearnMyCours />
        <CardLearnMyCours />
        <CardLearnMyCours />
        <CardLearnMyCours />
        <CardLearnMyCours />
      </div>
    </div>
  );
};

export default SingleMyCours;
