import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { useLocation } from 'react-router-dom';
import routes from '../../../routes/routes';

import styles from './balance.module.css';
import BalanceNotify from './balanceNotification';
import BalanceMobile from './balanceMobile';
import { userSelectors, userOperations } from '../../../redux/user';


  const Balance = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const width = useWindowWidth();
  const balance = useSelector(userSelectors.getUserBalance);
  const [value, setValue] = useState(balance.toFixed(2));
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => setValue(Number(e.target.value));

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setIsLoading(true);
      setValue(Number(value).toFixed(2));
      dispatch(userOperations.setCurrentBalance(value));
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    },
    [dispatch, value],
  );

  useEffect(() => {
    setValue(() => balance.toFixed(2));
  }, [balance]);

  const delay = useWindowWidth() < 1280 ? 0 : 250;

  const marginLeft =
    location.pathname === routes.reportPage && width > 767 && width < 1280
      ? `${styles.form} ${styles.marginLeft}`
      : `${styles.form}`;

  return (
    <form className={marginLeft} onSubmit={handleSubmit}>
      {location.pathname === routes.reportPage &&
      width > 319 &&
      width < 1280 ? (
        <BalanceMobile balance={balance} />
      ) : (
        <>
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
                onBlur={() =>
                  setTimeout(() => setValue(balance.toFixed(2)), delay)
                }
                id="balance"
                required
              />

              <span className={styles.span}>UAH</span>
            </div>
            {location.pathname === routes.reportPage &&
            width > 319 &&
            width < 1280 ? null : (
              <button className={styles.btnConfirm} type="submit">
                Подтвердить
              </button>
            )}
          </div>
        </>
      )}

      {value === '0.00' && <BalanceNotify />}
    </form>
  );
};

export default Balance;
