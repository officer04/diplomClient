import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './Cours.module.scss';

import ElipsRed from './../../images/EllipseRed.svg'
import ElipsBlue from './../../images/EllipseBlue.svg'

const Cours = () => {
  useEffect(() => {
    window.scroll(0, 0);
  })
  
  const scroll = (xp) => {
    window.scrollTo({
      top: xp,
      behavior: "smooth"
    })
  }
  
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.wrapper}>
          <h1>Стать джуниором в 2024 году </h1>
          <p>
            Мы сделаем из вас junior-разработчика с доходом от 70.000 ₽ и гарантией для
            трудоустройства
          </p>
          <Link to="" onClick={() => scroll(600)}>
            <button>Узнать больше</button>
          </Link>
        </div>
      </div>
      <div id='' className={styles.cours}>
        <h1 className={styles.title}>Какие направления можно выбрать</h1>
        <div className={styles.wrapper}>
          <Link to="/frontend" className={styles.link}>
            <img src={ElipsBlue} className={styles.img} alt="" />
            <div className={styles.card}>
              <h3>
                Junior <br /> frontend разработчик
              </h3>
              <p>
                Навыки, которые приобритёте:{' '}
                <span>HTML, CSS, JavaScript, React, Redux, Backend, Docker, MongoBD</span>
              </p>
              <p>С нуля 12 месяцев</p>
            </div>
          </Link>
          <Link to="/backend" className={styles.link}>
            <img src={ElipsRed} alt="" />
            <div className={styles.card}>
              <h3>
                Junior <br /> bakend разработчик
              </h3>
              <p>
                Навыки, которые приобритёте:{' '}
                <span>
                  .Net Core 6, Asp net core, EntityFramework, Postgres, Apache nifi, Docker, Mongo,
                  MediatR.
                </span>
              </p>
              <p>С нуля 12 месяцев</p>
            </div>
          </Link>
        </div>
        <div className={styles.diagnostics}>
          <h3>Диагностика</h3>
          <p>Пройти его и узнай в какую сферу у тебя больше направленность</p>
          <button>Тык сюда</button>
        </div>
      </div>
    </section>
  );
};

export default Cours;
