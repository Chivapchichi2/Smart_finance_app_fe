import { useWindowWidth } from '@react-hook/window-size';

import { ReactComponent as LogOutBtn } from './logout.svg';
import styles from './userBar.module.css';

function UserBar() {
  const width = useWindowWidth();
  return (
    <div className={styles.userBar}>
      <p>UserName</p>
      {width > 320 ? <div className={styles.vector} /> : ''}
      <button type="button" className={styles.logOutBtn}>
        {width > 320 ? 'Выйти' : <LogOutBtn />}
      </button>
    </div>
  );
}

export default UserBar;
