import { NavLink, useParams } from 'react-router-dom';
import styles from './ModuleLessons.module.scss';
import { ROUTES } from '../../../utils/conts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteModule, getCoursModule, getCoursModuleLesson } from '../../../featers/cours/cours';
import CardCoursCreate from '../CardCoursCreate/CardCoursCreate';
import CardModule from '../CardModules/CardModule';

const ModuleLessons = () => {
  const dispatch = useDispatch();
  const { isLoading, lessonsInfo, lessons } = useSelector(({ cours }) => cours);
  const { moduleId } = useParams();
  useEffect(() => {
    dispatch(getCoursModuleLesson(moduleId));
  }, []);
  console.log(lessons);
  const handleClickDeleteCourse = (e, moduleId) => {
    // e.preventDefault();
    // dispatch(deleteModule(moduleId)).then((response) => {
    //   console.log(response);
    //   if (response.payload?.status === 204) {
    //     dispatch(getCoursModule(coursId));
    //   }
    // });
  };

  return (
    <div className={styles.coursModules}>
      {/* <h1 className={styles.title}>{cours?.title}</h1> */}
      <h1 className={styles.title}>{lessonsInfo.moduleTitle}</h1>

      <ul className={styles.nav}>
        <NavLink
          to={`${ROUTES.CHANGE_COURS}/${lessonsInfo?.coursInfo?.coursId}`}
          // to={`${ROUTES.CHANGE_COURS}/${moduleId}`}
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          Параметры курса
        </NavLink>
        <NavLink
          to={`${ROUTES.MODULES_ADMIN}/${lessonsInfo?.coursInfo?.coursId}`}
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          Модули курса
        </NavLink>
        <NavLink
          to={`${ROUTES.LESSONS_MODULE_ADMIN}/${moduleId}`}
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
        >
          Уроки модуля
        </NavLink>
      </ul>

      <div className={styles.wrapper}>
        {isLoading ? (
          <>
            <CardCoursCreate
              id={moduleId}
              className={styles.card}
              to={`${ROUTES.CREATE_LESSON}/${moduleId}`}
            />
            {lessonsInfo.lessons?.map((lesson) => (
              <CardModule
                key={lesson._id}
                title={lesson.title}
                id={lesson._id}
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

export default ModuleLessons;
