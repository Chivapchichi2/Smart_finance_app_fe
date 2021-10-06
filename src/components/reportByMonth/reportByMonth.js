import s from './reportByMonth.module.css';

const reportByMonth = () => (
  <div className={s.container}>
    <div className={s.expenseBox}>
      <p className={s.text}>Расходы:</p>
      <p className={s.value}>- 18 000.00 грн.</p>
    </div>
    <div className={s.divide} />
    <div className={s.incomeBox}>
      <p className={s.text}>Доходы:</p>
      <p className={s.value}>+ 45 000.00 грн.</p>
    </div>
  </div>
);

export default reportByMonth;
