import styles from './CardMyCours.module.scss';

import { Link } from 'react-router-dom';

import bg from './../../../images/bgs.png';

const CardMyCours = ({head ,title, text, style}) => {
  return (
    <Link to="/single-my-cours">
      <div className={`${styles.card} ${style}`}>
        <div className={styles.text}>
          <span>{head}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <img src={bg} className={styles.img} alt="" />
      </div>
    </Link>
  );
};

export default CardMyCours;
