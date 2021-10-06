import Logo from './logo';
import UserBar from './userBar/userBar';

import styles from './header.module.css';

const testUser = { name: 'Bob' };

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <UserBar user={testUser} />
    </header>
  );
}

export default Header;
