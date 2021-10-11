import { useHistory, useLocation } from 'react-router-dom';
import routes from '../../../routes/routes';
import styles from './backToMain.module.css';

const BackToMain = () => {
  const history = useHistory();
  const location = useLocation();

  const expincpos =
    location.pathname === routes.reportIncomes ||
    location.pathname === routes.reportExpenses
      ? `${styles.btnBack} ${styles.btnPosition}`
      : `${styles.btnBack}`;

  const HandleClick = () => history.push(routes.homePage);

  return (
    <button className={expincpos} type="button" onClick={HandleClick}>
      <p className={styles.btnText}>Вернуться на главную</p>
    </button>
  );
};

export default BackToMain;
