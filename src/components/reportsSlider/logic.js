import { useSelector } from 'react-redux';
import ledgerSelectors from '../../redux/ledger/ledger-selectors';

const reportSLiderLogic = () => {
  const incomesByMonthData = useSelector(ledgerSelectors.incomesByMonthData);

  const expensesByMonthData = useSelector(ledgerSelectors.expenseByMonthData);

  console.log('incomesByMonthData', incomesByMonthData);

  console.log('expensesByMonthData', expensesByMonthData);

//   const foodExp = expensesByMonthData.reduce((acc, item) => {
//     if (acc.length === 0) {
//       return acc.push({
//         category: item.category,
//         summary: item.value,
//       });
//       }
      
//       acc.forEach(elem => {
//           elem[item.category] ? elem.
//       })
//   }, []);
// };

// export default reportSLiderLogic;

// [
//   {
//     category: 'Продукты',
//     summary: 35000,
//   },
//   {
//     category: 'Здоровье',
//     summary: 50000,
//   },
// ];
