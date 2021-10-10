import { useHistory } from 'react-router-dom';
import routes from '../../../routes/routes';
import styles from './backToMain.module.css';

const BackToMain = () => {
  const history = useHistory();

  const HandleClick = () => history.push(routes.homePage);

  return (
    <button className={styles.btnBack} type="button" onClick={HandleClick}>
      <p className={styles.btnText}>Вернуться на главную</p>
    </button>
  );
};

export default BackToMain;
