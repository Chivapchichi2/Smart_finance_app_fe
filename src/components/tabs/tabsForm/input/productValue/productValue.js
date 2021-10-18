import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ledgerSelectors } from '../../../../../redux/ledger';

import s from './productValue.module.css';

const ProductValue = ({ handleSum }) => {
  const balance = 0;
  const [sum, setSum] = useState(balance.toFixed(2));
  const inputClean = useSelector(ledgerSelectors.getResetedInputValues);

  const handleChange = e => {
    setSum(e.target.value);
  };

  useEffect(() => {
    handleSum(sum);
  }, [sum]);

  useEffect(() => {
    setSum(balance.toFixed(2));
  }, [inputClean]);

  return (
    <div className={s.inputWrapper}>
      <input
        type="number"
        className={s.input}
        // placeholder="0.00"
        onChange={handleChange}
        onFocus={() => setSum('')}
        value={sum}
      />
      <span className={s.span}>UAH</span>
      <div className={s.calculator} />
    </div>
  );
};

export default ProductValue;
