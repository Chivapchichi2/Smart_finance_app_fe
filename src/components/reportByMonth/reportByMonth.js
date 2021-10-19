import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ledgerSelectors from '../../redux/ledger/ledger-selectors';

import s from './reportByMonth.module.css';

const reportByMonth = () => {
  const incomesByYear = useSelector(ledgerSelectors.incomesByYear);
  const expensesByYear = useSelector(ledgerSelectors.expenseByYear);
  const yearData = useSelector(ledgerSelectors.datepickerValue);
  const monthData = useSelector(ledgerSelectors.datepickerValue);
  const incomesByMonthData = useSelector(ledgerSelectors.incomesByMonthData);
  const expenseByMonthData = useSelector(ledgerSelectors.expenseByMonthData);
  const currentYear = yearData.substr(3, 4);
  const currentMonth = monthData.substr(0, 2);

  const [incomes, setIncomes] = useState(
    incomesByYear[currentYear]
      ? incomesByYear[currentYear][currentMonth]
        ? incomesByYear[currentYear][currentMonth]
        : []
      : [],
  );
  const [expenses, setExpenses] = useState(
    expensesByYear[currentYear]
      ? expensesByYear[currentYear][currentMonth]
        ? expensesByYear[currentYear][currentMonth]
        : []
      : [],
  );

  useEffect(() => {
    setIncomes(
      incomesByYear[currentYear]
        ? incomesByYear[currentYear][currentMonth]
          ? incomesByYear[currentYear][currentMonth]
          : []
        : [],
    );
    setExpenses(
      expensesByYear[currentYear]
        ? expensesByYear[currentYear][currentMonth]
          ? expensesByYear[currentYear][currentMonth]
          : []
        : [],
    );
  }, [
    expenses,
    currentMonth,
    incomesByYear,
    expensesByYear,
    incomesByMonthData,
    expenseByMonthData,
  ]);

  return (
    <div className={s.container}>
      <div className={s.expenseBox}>
        <p className={s.text}>Расходы:</p>
        <p className={s.value}>
          - {expenses.length > 0 ? expenses : '0'}.00 грн.
        </p>
      </div>
      <div className={s.divide} />
      <div className={s.incomeBox}>
        <p className={s.text}>Доходы:</p>
        <p className={s.value}>
          + {incomes.length > 0 ? incomes : '0'}.00 грн.
        </p>
      </div>
    </div>
  );
};

export default reportByMonth;
