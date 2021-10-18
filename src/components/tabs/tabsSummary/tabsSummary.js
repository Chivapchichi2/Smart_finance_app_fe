import styles from './tabsSummary.module.css';

function TabsSummary({ data }) {
  const parsedData = data.reduce(
    (acc, i) => (i.includes('undefined') ? acc : [...acc, i]),
    [],
  );
  return (
    <table className={styles.table}>
      <th className={styles.title}>Сводка</th>
      {parsedData.map(i => {
        const x = i.split(' ');

        return (
          <tr key={x[0]} className={styles.tr}>
            <td>{x[0].toLocaleUpperCase()}</td>
            <td>{x[1]}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default TabsSummary;
