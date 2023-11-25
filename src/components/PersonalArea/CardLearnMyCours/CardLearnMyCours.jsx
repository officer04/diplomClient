import styles from './CardLearnMyCours.module.scss';

import {Link} from 'react-router-dom'

const CardLearnMyCours = () => {
  return (
    <Link to="/single-my-cours-task" className={styles.cardLearnMyCours}>
      <h3>Приветствие</h3>
      <div>
        <p>100%</p>
        <div className={styles.prograss} />
      </div>
    </Link>
  );
};

export default CardLearnMyCours;
