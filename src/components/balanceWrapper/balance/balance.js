import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';

import styles from './balance.module.css';
import BalanceNotify from './balanceNotification';
import authSelectors from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';

const Balance = () => {
  const dispatch = useDispatch();

  const balance = useSelector(authSelectors.getUserBalance);

  const [value, setValue] = useState(balance.toFixed(2));
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => setValue(Number(e.target.value));

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setIsLoading(true);
      setValue(Number(value).toFixed(2));
      dispatch(authOperations.getCurrentBalance(value));
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    },
    [dispatch, value],
  );

  useEffect(() => {
    setValue(() => balance.toFixed(2));
  }, [balance]);

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
            value={isLoading ? null : value}
            onChange={handleChange}
            onFocus={() => setValue('')}
            onBlur={() => setTimeout(() => setValue(balance.toFixed(2)), 250)}
            id="balance"
            required
          />

          <span className={styles.span}>UAH</span>
        </div>
        <button className={styles.btnConfirm} type="submit">
          Подтвердить
        </button>
      </div>

      {value === '0.00' && <BalanceNotify />}
    </form>
  );
};

export default Balance;
