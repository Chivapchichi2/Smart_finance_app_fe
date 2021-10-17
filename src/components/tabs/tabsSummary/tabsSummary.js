import { ledgerSelectors } from '../../../redux/ledger';
import serviceApi from '../../../service/api';
import styles from './tabsSummary.module.css';

const data = [
  { month: 'november', summary: '1000', id: '1' },
  { month: 'november', summary: '1000', id: '2' },
  { month: 'november', summary: '1000', id: '3' },
  { month: 'november', summary: '1000', id: '5' },
  { month: 'november', summary: '1000', id: '7' },
  { month: 'november', summary: '1000', id: '9' },
];

function TabsSummary() {
  const currentYear = new Date().getFullYear().toString();

  return (
    <table className={styles.table}>
      <th className={styles.title}>Сводка</th>
      {data.map(i => (
        <tr key={i.id} className={styles.tr}>
          <td>{i.month.toUpperCase()}</td>
          <td>{i.summary}</td>
        </tr>
      ))}
    </table>
  );
}

export default TabsSummary;
