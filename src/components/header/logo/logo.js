import { ReactComponent as LogoImg } from './logo.svg';

import styles from './logo.module.css';

function Logo() {
  return (
    <div className={styles.container}>
      <LogoImg />
    </div>
  );
}

export default Logo;
