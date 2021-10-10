import styles from './tabsSummary.module.css';

const data = [
  { month: 'november', summary: '1000' },
  { month: 'november', summary: '1000' },
  { month: 'november', summary: '1000' },
  { month: 'november', summary: '1000' },
  { month: 'november', summary: '1000' },
  { month: 'november', summary: '1000' },
];

function TabsSummary() {
  return (
    <table className={styles.table}>
      <th className={styles.title}>Сводка</th>
      {data.map(i => (
        <tr className={styles.tr}>
          <td>{i.month.toUpperCase()}</td>
          <td>{i.summary}</td>
        </tr>
      ))}
    </table>
  );
}

export default TabsSummary;
