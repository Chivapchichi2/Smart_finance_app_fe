import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ledgerSelectors } from '../../../../../redux/ledger';
import s from './productDescription.module.css';

const productDescription = ({ handleDescription }) => {
  const [value, setValue] = useState('');
  const inputClean = useSelector(ledgerSelectors.getResetedInputValues);

  const handleChange = e => [setValue(e.target.value)];

  useEffect(() => {
    handleDescription(value);
  }, [value]);

  useEffect(() => {
    setValue('');
  }, [inputClean]);

  return (
    <div>
      <input
        className={s.input}
        type="text"
        placeholder="Описание товара"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default productDescription;
