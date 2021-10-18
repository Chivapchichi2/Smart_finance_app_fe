/* eslint-disable no-unused-expressions */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProductDescription from './input/productDescription';
import ProductCategory from './input/productCategory';
import ProductValue from './input/productValue';
import ProductButtons from './input/productButtons';
import DatePicker from './input/datePicker';

import routes from '../../../routes/routes';
import {
  ledgerOperations,
  ledgerSelectors,
  ledgerActions,
} from '../../../redux/ledger';

import s from './tabsFrom.module.css';

const TabForm = ({ endpoint, data, catName, inc, exp }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [trans, setTrans] = useState([]);

  const error = useSelector(ledgerSelectors.errorByYear);
  const dater = useSelector(ledgerSelectors.datepickerValue);

  const handlerSubmit = async e => {
    e.preventDefault();
    const transaction = {
      date: e.target[0].defaultValue,
      description: e.target[1].value,
      category: e.target[2].textContent,
      value: e.target[3].valueAsNumber,
    };

    setTrans([...trans, transaction]);

    await dispatch(ledgerOperations.addUserBank(endpoint, transaction));

    inc && dispatch(ledgerOperations.getIncomeByMonth(dater));
    exp && dispatch(ledgerOperations.getExpenseByMonth(dater));
  };

  return (
    <form type="submit" className={s.tabForm} onSubmit={handlerSubmit}>
      {location.pathname === routes.reportExpenses ||
      location.pathname === routes.reportIncomes ? null : (
        <DatePicker />
      )}

      <div className={s.formWrapper}>
        <ProductDescription />
        <ProductCategory category={data} categoryType={catName} />
      </div>
      <ProductValue />
      <ProductButtons />
    </form>
  );
};

TabForm.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default TabForm;
