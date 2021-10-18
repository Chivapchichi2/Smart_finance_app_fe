import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ledgerSelectors } from '../../../../../redux/ledger';

import s from './productValue.module.css';

const ProductValue = ({ handleSum }) => {
  const [sum, setSum] = useState(0);
  const inputClean = useSelector(ledgerSelectors.getResetedInputValues);

  const handleChange = e => {
    setSum(e.target.value);
  };

  useEffect(() => {
    handleSum(sum);
  }, [sum]);

  useEffect(() => {
    setSum(0);
  }, [inputClean]);

  return (
    <div className={s.inputWrapper}>
      <input
        type="number"
        className={s.input}
        placeholder="00.00"
        onChange={handleChange}
        value={sum}
      />
      <span className={s.span}>UAH</span>
      <div className={s.calculator} />
    </div>
  );
};

export default ProductValue;
