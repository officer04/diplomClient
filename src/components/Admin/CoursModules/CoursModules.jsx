import { Link, NavLink, useParams } from 'react-router-dom';
import styles from './CoursModules.module.scss';
import { ROUTES } from '../../../utils/conts';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
// import CardLearnMyCours from './../CardLearnMyCours/CardLearnMyCours';
import CardLearnMyCours from './../../PersonalArea/CardLearnMyCours/CardLearnMyCours';
import { useEffect } from 'react';
import {
  deleteModule,
  getCoursModule,
  getCoursModuleAll,
  getCoursOne,
} from '../../../featers/cours/cours';
import CardCoursCreate from '../CardCoursCreate/CardCoursCreate';
import CardModule from '../CardModules/CardModule';

const CoursModules = () => {
  const dispatch = useDispatch();
  const { isLoading, modules, cours } = useSelector(({ cours }) => cours);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCoursModule(id));
  }, []);

  const handleClickDeleteCourse = (e, moduleId) => {
    e.preventDefault();
    dispatch(deleteModule(moduleId)).then((response) => {
      console.log(response);
      if (response.payload?.status === 204) {
        dispatch(getCoursModule(id));
      }
    });
  };

  return (
    <div className={styles.coursModules}>
      <h1 className={styles.title}>{cours?.title}</h1>

      <ul className={styles.nav}>
        <NavLink
          to={`${ROUTES.CHANGE_COURS}/${id}`}
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          Параметры курса
        </NavLink>
        <NavLink
          to={`${ROUTES.MODULES_ADMIN}`}
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          Модули курса
        </NavLink>
      </ul>

      <div className={styles.wrapper}>
        {isLoading ? (
          <>
            <CardCoursCreate id={id} className={styles.card} to={`${ROUTES.CREATE_MODULE}/${id}`} />
            {modules?.map((cours) => (
              <CardModule
                key={cours._id}
                title={cours.title}
                id={cours._id}
                handleClickDeleteCourse={handleClickDeleteCourse}
              />
            ))}
          </>
        ) : (
          <h1 className={styles.loading}>Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default CoursModules;
