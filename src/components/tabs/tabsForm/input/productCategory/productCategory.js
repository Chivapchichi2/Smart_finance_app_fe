import { useState } from 'react';
import s from './productCategory.module.css';

const ProductCategory = ({ category, categoryType }) => {
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
        {!value ? categoryType : value}
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
