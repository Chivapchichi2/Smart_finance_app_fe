import { useWindowWidth } from '@react-hook/window-size';
import { ReactComponent as LogOutBtnImg } from './logout.svg';
import { ReactComponent as UserIcon } from './users.svg';

import styles from './userBar.module.css';

function UserBar({ user }) {
  const width = useWindowWidth();
  return (
    <div className={styles.container}>
      {user.avatar ? user.avatar : <UserIcon className={styles.avatar} />}

      {width > 767 ? (
        <>
          <p>{user.name}</p> <div className={styles.vector} />
        </>
      ) : (
        ''
      )}
      <button type="button" className={styles.logOutBtnSvg}>
        {width > 767 ? 'Выйти' : <LogOutBtnImg />}
      </button>
    </div>
  );
}

export default UserBar;
