import { useWindowWidth } from '@react-hook/window-size';

import { ReactComponent as LogOutBtnImg } from './logout.svg';
import styles from './userBar.module.css';

function UserBar() {
  const width = useWindowWidth();
  return (
    <div className={styles.container}>
      <p>UserName</p>
      {width > 767 ? <div className={styles.vector} /> : ''}
      <button type="button" className={styles.logOutBtnSvg}>
        {width > 767 ? 'Выйти' : <LogOutBtnImg />}
      </button>
    </div>
  );
}

export default UserBar;
