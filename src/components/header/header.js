import Logo from './logo';
import UserBar from './userBar/userBar';

import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <UserBar />
    </header>
  );
}

export default Header;
