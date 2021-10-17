/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';

import ledgerSelectors from '../../../redux/ledger/ledger-selectors';
import ledgerOperations from '../../../redux/ledger/ledger-operations';

import iconDelete from '../tabsTable/delete.svg';
import styles from './styles';

const MobileTable = () => {
  const classes = makeStyles(theme => styles(theme))();

  const dispatch = useDispatch();

  const dater = useSelector(ledgerSelectors.datepickerValue);

  const expensesByMonthData = useSelector(ledgerSelectors.expenseByMonthData);
  const incomesByMonthData = useSelector(ledgerSelectors.incomesByMonthData);

  const [state, setState] = useState([]);

  useEffect(
    () => setState([...incomesByMonthData, ...expensesByMonthData]),
    [expensesByMonthData, incomesByMonthData],
  );

  useEffect(() => {
    if (dater) {
      dispatch(ledgerOperations.getIncomeByMonth(dater));
      dispatch(ledgerOperations.getExpenseByMonth(dater));
    }
  }, [dispatch, dater]);

  const onDeleteHandler = async id => {
    await dispatch(ledgerOperations.deleteUserTransaction(id));

    dispatch(ledgerOperations.getIncomeByMonth(dater));
    dispatch(ledgerOperations.getExpenseByMonth(dater));
  };

  const getAction = id => (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      className="delButton"
      style={{ backgroundImage: `url(${iconDelete})` }}
      onClick={() => onDeleteHandler(id)}
    />
  );

  const isIncome = item =>
    !!(item.category === 'Дополнительные доходы' || item.category === 'ЗП');

  const result = state
    .map(item => ({
      ...item,
      value:
        isIncome(item) > 0 ? (
          <span className="high">{item.value}</span>
        ) : (
          <span className="low">{`-${item.value}`}</span>
        ),
      action: getAction(item._id),
    }))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <ul className={classes.transactionsList}>
      {result.map(item => (
        <>
          <li key={item._id} className="transactionWrapper">
            <div className="descWr">
              <h2 className="description">{item.description}</h2>
              <div className="smallWr">
                <span className="date">{item.date}</span>
                <span className="category">{item.category}</span>
              </div>
            </div>
            <div className="sumWr">
              <span className="sum">{item.value}</span>
              {item.action}
            </div>
          </li>
          <Divider variant="middle" />
        </>
      ))}
    </ul>
  );
};

export default MobileTable;
