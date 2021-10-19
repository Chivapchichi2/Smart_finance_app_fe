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

  const teampos = `${styles.btnBack} ${styles.teampos}`;

  const HandleClick = () => history.push(routes.homePage);

  return (
    <button
      className={location.pathname === routes.ourTeam ? teampos : expincpos}
      type="button"
      onClick={HandleClick}
    >
      <p className={styles.btnText}>Вернуться на главную</p>
    </button>
  );
};

export default BackToMain;
