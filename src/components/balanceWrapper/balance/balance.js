import styles from './balance.module.css';

const Balance = () => (
  <form className={styles.form}>
    <label className={styles.labelBalance} htmlFor="balance">
      Баланс:
    </label>
    <div className={styles.wrapperBalance}>
      <div className={styles.container}>
        <input
          autoComplete="off"
          className={styles.inputBalance}
          type="number"
          placeholder="00.00"
          id="balance"
          required
        />

        <span className={styles.span}>UAH</span>
      </div>
      <button className={styles.btnConfirm} type="submit">
        Подтвердить
      </button>
    </div>
  </form>
);

export default Balance;
