import { useSelector } from 'react-redux';
import Logo from './logo';
import UserBar from './userBar/userBar';
import authSelector from '../../redux/auth/auth-selectors';

import styles from './header.module.css';

const testUser = { name: 'Bob' };

function Header() {
  const isAuth = useSelector(authSelector.getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Logo />
      {isAuth && <UserBar user={testUser} />}
    </header>
  );
}

export default Header;
