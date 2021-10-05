import styles from './backToMain.module.css';

const BackToMain = () => (
  <button className={styles.btnBack} type="button">
    <p className={styles.btnText}>Вернуться на главную</p>
  </button>
);

export default BackToMain;
