import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './balance.module.css';
import BalanceNotify from './balanceNotification';
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';

const Balance = () => {
  const dispatch = useDispatch();

  const balance = useSelector(authSelectors.getUserBalance);

  const [value, setValue] = useState(balance.toFixed(2));

  const handleChange = e => setValue(Number(e.target.value));

  useEffect(() => {
    setValue(balance.toFixed(2));
  }, [balance]);

  const handleSubmit = e => {
    e.preventDefault();

    setValue(Number(value).toFixed(2));

    dispatch(authOperations.getCurrentBalance(value));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.labelBalance} htmlFor="balance">
        Баланс:
      </label>
      <div className={styles.wrapperBalance}>
        <div className={styles.container}>
          <input
            autoComplete="off"
            className={styles.inputBalance}
            type="number"
            value={value}
            onChange={handleChange}
            onFocus={() => setValue('')}
            onBlur={() => setTimeout(() => setValue(balance.toFixed(2)), 500)}
            id="balance"
            required
          />

          <span className={styles.span}>UAH</span>
        </div>
        <button className={styles.btnConfirm} type="submit">
          Подтвердить
        </button>
      </div>

      {value === 0 && <BalanceNotify />}
    </form>
  );
};

export default Balance;
