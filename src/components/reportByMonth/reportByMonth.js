import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ledgerSelectors from '../../redux/ledger/ledger-selectors';

import s from './reportByMonth.module.css';

const reportByMonth = () => {
  const incomesByYear = useSelector(ledgerSelectors.incomesByYear);
  const expensesByYear = useSelector(ledgerSelectors.expenseByYear);
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = new Date()
    .toLocaleDateString('ru')
    .split('.')
    .splice(1, 1)
    .join('');

  useEffect(() => {}, [incomesByYear, expensesByYear]);

  return (
    <div className={s.container}>
      <div className={s.expenseBox}>
        <p className={s.text}>Расходы:</p>
        <p className={s.value}>
          - {expensesByYear[currentYear][currentMonth]}.00 грн.
        </p>
      </div>
      <div className={s.divide} />
      <div className={s.incomeBox}>
        <p className={s.text}>Доходы:</p>
        <p className={s.value}>
          + {incomesByYear[currentYear][currentMonth]}.00 грн.
        </p>
      </div>
    </div>
  );
};

export default reportByMonth;
