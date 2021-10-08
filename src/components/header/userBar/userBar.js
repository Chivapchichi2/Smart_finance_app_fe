import { useWindowWidth } from '@react-hook/window-size';
import { useSelector } from 'react-redux';
import { ReactComponent as LogOutBtnImg } from './logout.svg';
import { ReactComponent as UserIcon } from './users.svg';
import authSelector from '../../../redux/auth/auth-selectors';

import styles from './userBar.module.css';

function UserBar({ user }) {
  const width = useWindowWidth();

  const userEmail = useSelector(authSelector.getUserEmail);

  // ---- userName - переменная в которой хранится часть имейла до @ и используется как имя пользователя ---- //

  const userName = userEmail.split('@');

  return (
    <div className={styles.container}>
      {user.avatar ? user.avatar : <UserIcon className={styles.avatar} />}

      {width > 767 ? (
        <>
          <p>{userName[0]}</p> <div className={styles.vector} />
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
