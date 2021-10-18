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

  // const [inputDate, setInputDate] = useState('');
  const [descr, setDescr] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState(0);

  const changeCategory = value => {
    setCategory(value);
  };
  const handleDescription = value => {
    setDescr(value);
  };
  const handleSum = value => {
    setSum(value);
  };
  // const handleDate = value => {
  //   setInputDate(value);
  // };

  const error = useSelector(ledgerSelectors.errorByYear);
  const dater = useSelector(ledgerSelectors.datepickerValue);
  const resetInputs = () => dispatch(ledgerActions.resetInputValues(1));

  const handlerSubmit = async e => {
    e.preventDefault();

    const transaction = {
      date: e.target[0].defaultValue,
      description: descr,
      category: category,
      value: +sum,
    };

    setTrans([...trans, transaction]);

    await dispatch(ledgerOperations.addUserBank(endpoint, transaction));

    inc && dispatch(ledgerOperations.getIncomeByMonth(dater));
    exp && dispatch(ledgerOperations.getExpenseByMonth(dater));
    resetInputs();
  };

  return (
    <form type="submit" className={s.tabForm} onSubmit={handlerSubmit}>
      {/* {location.pathname === routes.reportExpenses ||
      location.pathname === routes.reportIncomes ? null : ( */}
      <DatePicker />
      {/* )} */}

      <div className={s.formWrapper}>
        <ProductDescription handleDescription={handleDescription} />
        <ProductCategory
          category={data}
          categoryType={catName}
          changeCategory={changeCategory}
        />
      </div>
      <ProductValue handleSum={handleSum} />
      <ProductButtons resetInputs={resetInputs} />
    </form>
  );
};

TabForm.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default TabForm;
