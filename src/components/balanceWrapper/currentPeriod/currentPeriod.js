import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconArrowLeft } from '../../../svg/arrowLeft.svg';
import { ReactComponent as IconArrowRight } from '../../../svg/arrowRight.svg';
import ledgerOperations from '../../../redux/ledger/ledger-operations';
import ledgerSelectors from '../../../redux/ledger/ledger-selectors';
import styles from './currentPeriod.module.css';

const CurrentPeriod = () => {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const reportSliderValue = useSelector(ledgerSelectors.getReportSliderValue);

  console.log('reportSliderValue', reportSliderValue);

  const changeMonth = action => {
    const value = action === 'prev' ? -1 : 1;
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      const month = newDate.getMonth();
      newDate.setMonth(month + value);
      if (newDate > new Date()) {
        return prevDate;
      }
      return newDate;
    });
  };

  const getMonthAndYear = `${date.getMonth() + 1}.${date.getFullYear()}`;

  useEffect(
    () => {
      dispatch(ledgerOperations.getExpenseByMonth(getMonthAndYear));
      dispatch(ledgerOperations.getIncomeByMonth(getMonthAndYear));
    },
    // reportSliderValue === 'Расходы'
    //   ? dispatch(ledgerOperations.getExpenseByMonth(getMonthAndYear))
    //   : dispatch(ledgerOperations.getIncomeByMonth(getMonthAndYear)),
    [dispatch, date, reportSliderValue],
  );

  const year = date.getFullYear();
  const month = date.toLocaleDateString('ru', { month: 'long' });

  return (
    <div className={styles.wrapCurrentPeriod}>
      <p className={styles.textCurrentPeriod}>Текущий период:</p>
      <div className={styles.btnWrapperArrow}>
        <button
          className={styles.btn}
          type="button"
          onClick={() => changeMonth('prev')}
        >
          <IconArrowLeft />
        </button>
        <p className={styles.text}>
          {month} {year}
        </p>
        <button
          className={styles.btn}
          type="button"
          onClick={() => changeMonth('next')}
        >
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CurrentPeriod;
