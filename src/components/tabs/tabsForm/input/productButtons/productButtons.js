import s from './productButtons.module.css';

const ProductButtons = ({ resetInputs }) => (
  <div className={s.buttonWrapper}>
    <button type="submit" className={s.button}>
      ввод
    </button>
    <button type="button" className={s.button} onClick={resetInputs}>
      очистить
    </button>
  </div>
);

export default ProductButtons;
