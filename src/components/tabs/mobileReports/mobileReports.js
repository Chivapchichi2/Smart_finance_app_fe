import { ReactComponent as DeleteImg } from '../tabsTable/delete.svg';

import styles from './mobileReports.module.css';

function MobileReports({ reports }) {
  return (
    <ul className={styles.list}>
      {reports.map(i => (
        <li className={styles.item} key={i.id}>
          <span className={styles.description}>{i.description}</span>
          <span className={styles.date}>{i.date}</span>
          <span className={styles.category}>{i.category}</span>
          <span className={styles.value}>{i.value} грн.</span>
          <DeleteImg className={styles.delete} />
        </li>
      ))}
    </ul>
  );
}

export default MobileReports;
