import styles from './Connection.module.scss'

const Connection = () => {
  return (
    <div className={styles.connection}>
    <div className={styles.text}>
      <h1>Запросить полную и подробную программу курса</h1>
    </div>
    <div className={styles.card}>
      <div className={styles.input}>
        <input type="text" placeholder='Имя' />
      </div>
      <div className={styles.input}>
        <input type="email" placeholder='Почта' />
      </div>
      <button className={styles.btn}>Отправить</button>
    </div>
  </div>
  )
}

export default Connection