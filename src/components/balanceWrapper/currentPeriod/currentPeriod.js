import { ReactComponent as IconArrowLeft } from '../../../svg/arrowLeft.svg';
import { ReactComponent as IconArrowRight } from '../../../svg/arrowRight.svg';
import styles from './currentPeriod.module.css';

const CurrentPeriod = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleDateString('ru', { month: 'long' });

  return (
    <div className={styles.wrapCurrentPeriod}>
      <p className={styles.textCurrentPeriod}>Текущий период:</p>
      <div className={styles.btnWrapperArrow}>
        <button className={styles.btn} type="button">
          <IconArrowLeft />
        </button>
        <p className={styles.text}>
          {month} {year}
        </p>
        <button className={styles.btn} type="button">
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CurrentPeriod;
