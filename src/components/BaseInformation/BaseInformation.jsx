import styles from './BaseInformation.module.scss';

import image from './../../images/image.png';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const BaseInformation = ({ title, description, titleColor, btnColor }) => {
  const location = useLocation();
  const { coursInfoDate } = useSelector(({ products }) => products);
  const locationPathname = location.pathname.substr(1);
  const [arr, setArr] = useState(coursInfoDate)
  // useEffect(() => {
  //   setArr(coursInfoDate.filter(
  //       (info) => info.cours === locationPathname,
  //   ));
  // }, []);

  return (
    <div className={styles.baseInformation}>
      <h1 className={`${styles.title} ${titleColor}`}>{title}</h1>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.description}>
            {description.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <button className={`${styles.btn} ${btnColor}`}>
            Записаться
          </button>
        </div>
        <div className={styles.img}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={styles.group}>
        {/* <div className={styles.item}>
          <h4>Когда</h4>
          <p>{arr[0].start}</p>
        </div>
        <div className={styles.item}>
          <h4>Длительность</h4>
          <p>{arr[0].duration}</p>
        </div>
        <div className={styles.item}>
          <h4>Формат обучения</h4>
          <p>{arr[0].education}</p>
        </div> */}
          <div className={styles.item}>
          <h4>Когда</h4>
          <p>dfgdfg</p>
        </div>
        <div className={styles.item}>
          <h4>Длительность</h4>
          <p>dfgdf</p>
        </div>
        <div className={styles.item}>
          <h4>Формат обучения</h4>
          <p>dfgdf</p>
        </div>
      </div>
    </div>
  );
};

export default BaseInformation;
