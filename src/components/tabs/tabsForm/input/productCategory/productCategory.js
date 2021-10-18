import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ledgerSelectors } from '../../../../../redux/ledger';
import s from './productCategory.module.css';

const ProductCategory = ({ category, categoryType, changeCategory }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(categoryType);
  const [categories, setCategories] = useState([]);

  const inputClean = useSelector(ledgerSelectors.getResetedInputValues);

  useEffect(() => setCategories(category), [category]);

  const handleOpen = () => setOpen(!open);

  const handleClick = e => {
    setValue(e.target.textContent);
    setOpen(false);
  };

  // window.addEventListener('click', e => {
  //   if (open && e.target.nodeName !== 'LI') {
  //     setOpen(false);
  //   }
  // });

  useEffect(() => {
    changeCategory(value);
  }, [value]);

  useEffect(() => {
    setValue(categoryType);
  }, [inputClean]);

  const keyDown = () => null;

  return (
    <div>
      <button
        type="button"
        // className={!value ? s.button : `${s.button} ${s.black}`}
        className={value === categoryType ? s.button : `${s.button} ${s.black}`}
        onClick={handleOpen}
      >
        {!value ? categoryType : value}
      </button>

      {open && category && (
        <ul className={s.menu}>
          {category &&
            category.map(item => (
              <li
                key={item}
                className={s.item}
                onClick={handleClick}
                value={value}
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
