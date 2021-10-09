import s from './productButtons.module.css';

const ProductButtons = () => (
  <div className={s.buttonWrapper}>
    <button type="button" className={s.button}>
      ввод
    </button>
    <button type="button" className={s.button}>
      очистить
    </button>
  </div>
);

export default ProductButtons;
