import { NavLink } from 'react-router-dom';
import styles from './goToReports.module.css';
import routes from '../../../routes/routes';

const GoToReports = () => (
  <button className={styles.btnReports} type="button">
    <NavLink exact to={routes.reportPage} className={styles.btnText}>
      Перейти к отчетам
    </NavLink>
    {/* <p className={styles.btnText}>Перейти к отчетам</p> */}
  </button>
);

export default GoToReports;
