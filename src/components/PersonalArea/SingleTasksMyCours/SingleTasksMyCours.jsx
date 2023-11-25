import styles from './SingleTasksMyCours.module.scss';
import taskSmall from './../../../images/tasks-small.svg'
import flag from './../../../images/flag.svg'
import CardTasksMyCours from '../CardTasksMyCours/CardTasksMyCours';
import { Link } from 'react-router-dom';

const SingleTasksMyCours = () => {
  return (
    <div className={styles.singleTasksMyCours}>
      <div className={styles.head}>
        {/* <p>Мои курсы / frontend разработчик </p> */}
        <Link to="/my-cours">Мои курсы /</Link>
        <Link to="/single-my-cours"> frontend разработчик</Link>
        <h1 className={styles.title}>День 5. Создание игры AIM Game</h1>
        <div className={styles.subtile}>
          <img src={taskSmall} alt="" />
          <p>4 из 4</p>
          <p>уроков</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <CardTasksMyCours title='Введение' progress="Пройдено" img={flag}/>
        <CardTasksMyCours title='Введение' progress="Пройдено" img={flag}/>
        <CardTasksMyCours title='Введение' progress="Пройдено" img={flag}/>
        <CardTasksMyCours title='Введение' progress="Пройдено" img={flag}/>
      </div>
    </div>
  );
};

export default SingleTasksMyCours;
