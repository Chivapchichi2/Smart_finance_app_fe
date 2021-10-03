import React from 'react';
import logo from './logo.svg';

import styles from './logo.module.css';

function Logo() {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="Kapusta" />
    </div>
  );
}

export default Logo;
