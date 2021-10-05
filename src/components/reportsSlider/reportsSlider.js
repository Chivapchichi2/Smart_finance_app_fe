import s from './reportsSlider.module.css';

const reportsSlider = () => (
  <div className={s.container}>
    <button className={s.button} type="button">
      Расходы
    </button>
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.value}>5000.00</p>
          <p className={s.text}>Продукты</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>200.00</p>
          <p className={s.text}>Алкоголь</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>800.00</p>
          <p className={s.text}>Развлечение</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>900.00</p>
          <p className={s.text}>Здоровье</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>2000.00</p>
          <p className={s.text}>Транспорт</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>1500.00</p>
          <p className={s.text}>Все для дома</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>800.00</p>
          <p className={s.text}>Техника</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>2200.00</p>
          <p className={s.text}>Коммуналка, связь</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>1800.00</p>
          <p className={s.text}>Cпорт, хобби</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>2400.00</p>
          <p className={s.text}>Образование</p>
        </li>
        <li className={s.item}>
          <p className={s.value}>3000.00</p>
          <p className={s.text}>Прочее</p>
        </li>
      </ul>
    </div>
  </div>
);

export default reportsSlider;
