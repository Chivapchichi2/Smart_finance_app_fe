import s from './productValue.module.css';

const ProductValue = () => (
  <div className={s.inputWrapper}>
    <input type="number" className={s.input} placeholder="00.00" />
    <span className={s.span}>UAH</span>
    <div className={s.calculator} />
  </div>
);

export default ProductValue;
