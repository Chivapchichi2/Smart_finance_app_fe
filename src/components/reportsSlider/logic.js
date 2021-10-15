/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
import { useSelector } from 'react-redux';
import ledgerSelectors from '../../redux/ledger/ledger-selectors';

const reportSLiderLogic = () => {
  const incomesByMonthData = useSelector(ledgerSelectors.incomesByMonthData);

  const expensesByMonthData = useSelector(ledgerSelectors.expenseByMonthData);

  console.log('incomesByMonthData', incomesByMonthData);

  console.log('expensesByMonthData', expensesByMonthData);

  const result = expensesByMonthData.reduce(
    (acc, { category, value }) =>
      !acc[category]
        ? { ...acc, [category]: value }
        : { ...acc, [category]: acc[category] + value },
    {},
  );
  console.log(result);

  const getData = data => {
    const arr = [];
    for (const key in data) {
      arr.push({
        category: key,
        summary: data[key],
      });
    }
    return arr;
  };

  console.log(getData(result));

  // const foodExp = expensesByMonthData.filter(
  //   item => item.category === 'Продукты',
  // );

  // const summary = foodExp.reduce((acc, item) => acc + item.value, 0);
  // console.log('foodExp', foodExp);
  // console.log('summary', summary);

  // const food = {
  //   category: 'Продукты',
  //   summary: summary,
  // };

  // console.log(food);
};

export default reportSLiderLogic;
