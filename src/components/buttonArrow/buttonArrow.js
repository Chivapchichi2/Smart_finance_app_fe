import styles from './buttonArrow.module.css';

const buttonArrow = ({ children, ...allyProps }) => (
  <button className={styles.btn} type="button" {...allyProps}>
    {children}
  </button>
);

export default buttonArrow;
