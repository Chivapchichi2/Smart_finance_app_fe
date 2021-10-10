import { useSelector } from 'react-redux';
import Logo from './logo';
import UserBar from './userBar/userBar';
import authSelector from '../../redux/auth/auth-selectors';

import styles from './header.module.css';

function Header() {
  const isAuth = useSelector(authSelector.getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Logo />
      {isAuth && <UserBar />}
    </header>
  );
}

export default Header;
