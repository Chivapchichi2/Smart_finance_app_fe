import { useState } from 'react';
import s from './productCategory.module.css';

const category = [
  'Транспорт',
  'Продукты',
  'Здоровье',
  'Алкоголь',
  'Развлечения',
  'Всё для дома',
  'Техника',
  'Коммуналка, связь',
  'Спорт, хобби',
  'Образование',
  'Прочее',
];

const ProductCategory = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleOpen = () => setOpen(!open);

  const handleClick = e => {
    setValue(e.target.textContent);
    setOpen(false);
  };

  const keyDown = () => null;

  return (
    <div>
      <button
        type="button"
        className={!value ? s.button : `${s.button} ${s.black}`}
        onClick={handleOpen}
      >
        {!value ? 'Категория товара' : value}
      </button>

      {open && (
        <ul className={s.menu}>
          {category.map(item => (
            <li
              key={item}
              className={s.item}
              onClick={handleClick}
              onKeyDown={keyDown}
              role="none"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCategory;
