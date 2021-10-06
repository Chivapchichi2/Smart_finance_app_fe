import styles from './tabsSummary.module.css';

function TabsSummary({ data }) {
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
