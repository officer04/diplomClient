import styles from './CardTasksMyCours.module.scss';

import { Link } from 'react-router-dom';

const CardTasksMyCours = ({ title, progress, img }) => {
  return (
    <Link to="/single-my-cours-tasks" className={styles.card}>
      <div className={styles.group}>
        <img src={img} alt="" />
        <p>{title}</p>
      </div>
      <p className={styles.text}>{progress}</p>
    </Link>
  );
};

export default CardTasksMyCours;
