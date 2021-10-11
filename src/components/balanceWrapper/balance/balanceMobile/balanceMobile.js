import s from './balanceMobile.module.css';

const balanceMobile = ({ balance }) => (
  <div className={s.mobileBalance}>
    <p className={s.balanceTitle}>Баланс:</p>
    <div className={s.balanceContainer}>
      <span className={s.balanceValue}>{`${balance.toFixed(2)} UAH`}</span>
    </div>
  </div>
);

export default balanceMobile;
