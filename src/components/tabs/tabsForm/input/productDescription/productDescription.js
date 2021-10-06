import s from './productDescription.module.css';

const productDescription = () => (
  <div>
    <input className={s.input} type="text" placeholder="Описание товара" />
  </div>
);

export default productDescription;
