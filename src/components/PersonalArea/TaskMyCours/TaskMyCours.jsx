import styles from './TaskMyCours.module.scss';
import arrowLeft from './../../../images/arrow-left.svg';
import arrowRight from './../../../images/arrow-right.svg';

import { Link } from 'react-router-dom';

const TaskMyCours = () => {
  return (
    <div className={styles.taskMyCours}>
      <div className={styles.head}>
        <Link to="/my-cours">Мои курсы /</Link>
        <Link to="/single-my-cours"> frontend разработчик</Link>
        <Link to="/single-my-cours-tasks"> / День 5. создание игры</Link>
        <h1 className={styles.title}>День 5. Создание игры AIM Game</h1>
      </div>
      <div className={styles.navigate}>
        <div className={styles.btnBack}>
          <img src={arrowLeft} alt="" />
          <button>Предыдущий урок</button>
        </div>
        <div className={styles.btnNext}>
          <button>Следующий урок</button>
          <img src={arrowRight} alt="" />
        </div>
      </div>
      <iframe
        width="1100"
        height="535"
        src="https://www.youtube.com/embed/GQ_pTmcXNrQ"
        title="Полный Full Stack курс ReactJS + NodeJS для начинающих за 4 часа! (MongoDB, Express, React, NodeJS)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default TaskMyCours;
