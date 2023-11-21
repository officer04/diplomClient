import { Link } from 'react-router-dom';
import styles from './Cours.module.scss';

const Cours = () => {
  return (
    <div>
      <section className={styles.banner}>
        <div className={styles.wrapper}>
          <h1>Стать джуниором в 2024 году </h1>
          <p>
            Мы сделаем из вас junior-разработчика с доходом от 70.000 ₽ и гарантией для
            трудоустройства
          </p>
          <Link to="/frontend">
            <button>Узнать больше</button>
          </Link>
        </div>
      </section>
      <section className={styles.cours}>
        <h1 className={styles.title}>Какие направления можно выбрать</h1>
        <div className={styles.wrapper}>
          <Link to='/frontend'>
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
          <Link to='/backend'>
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
      </section>
    </div>
  );
};

export default Cours;
