import { Link } from 'react-router-dom';

import { ReactComponent as LogoImg } from './logo.svg';
import routes from '../../../routes/routes';

import styles from './logo.module.css';

function Logo() {
  return (
    <div className={styles.container}>
      <Link to={routes.homePage}>
        <LogoImg />
      </Link>
    </div>
  );
}

export default Logo;
