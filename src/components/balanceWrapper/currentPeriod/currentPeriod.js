import { useState } from 'react';
import { ReactComponent as IconArrowLeft } from '../../../svg/arrowLeft.svg';
import { ReactComponent as IconArrowRight } from '../../../svg/arrowRight.svg';
import styles from './currentPeriod.module.css';

const CurrentPeriod = () => {
  const [date, setDate] = useState(new Date());

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

  const getMonthAndYear = date.toLocaleDateString();
  console.log(getMonthAndYear);

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
