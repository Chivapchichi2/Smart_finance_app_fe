/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ledgerSelectors from '../../../redux/ledger/ledger-selectors';
import ledgerOperations from '../../../redux/ledger/ledger-operations';
import iconDelete from './delete.svg';

import styles from './styles';

const AccountTable = props => {
  const { exp, inc } = props;

  const classes = makeStyles(theme => styles(theme))();

  const dispatch = useDispatch();

  const dater = useSelector(ledgerSelectors.datepickerValue);

  const expensesByMonthData = useSelector(ledgerSelectors.expenseByMonthData);
  const incomesByMonthData = useSelector(ledgerSelectors.incomesByMonthData);

  const [state, setState] = useState({
    headers: [
      { title: 'Дата', field: 'date' },
      { title: 'Описание', field: 'description' },
      { title: 'Категория', field: 'category' },
      { title: 'Сумма', field: 'sum' },
      { title: '', field: 'action' },
    ],
    rows: [],
  });

  useEffect(() => {
    inc
      ? setState(prev => ({
          ...prev,
          rows: [...incomesByMonthData],
        }))
      : setState(prev => ({
          ...prev,
          rows: [...expensesByMonthData],
        }));
  }, [expensesByMonthData, incomesByMonthData]);

  useEffect(() => {
    if (dater) {
      inc && dispatch(ledgerOperations.getIncomeByMonth(dater));
      exp && dispatch(ledgerOperations.getExpenseByMonth(dater));
    }
  }, [dispatch, dater]);

  const onDeleteHandler = async id => {
    await dispatch(ledgerOperations.deleteUserTransaction(id));

    inc && dispatch(ledgerOperations.getIncomeByMonth(dater));
    exp && dispatch(ledgerOperations.getExpenseByMonth(dater));
  };

  const { headers, rows } = state;

  const getAction = id => (
    // eslint-disable-next-line react/button-has-type
    <button
      className="delButton"
      style={{ backgroundImage: `url(${iconDelete})` }}
      onClick={() => onDeleteHandler(id)}
    >
      {' '}
    </button>
  );

  const result = rows
    .map(item => ({
      ...item,
      value: inc ? (
        <TableCell align="left" className="high">
          {item.value}
        </TableCell>
      ) : (
        <TableCell align="left" className="low">
          {`-${item.value}`}
        </TableCell>
      ),
      action: getAction(item._id),
    }))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className={classes.root}>
      {/* <Grid container>
        <Grid item xs={12}>
          <MaterialTable
            tableRef={tableRef}
            columns={headers}
            localization={localization}
            title=""
            data={eager ? result : ''}
            options={tableOptions}
          />
        </Grid>
      </Grid> */}
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table size="small" aria-label="table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              {headers?.map(item => (
                <TableCell key={item.title}>{item.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {result?.map(item => {
              const { date, description, category, value, action } = item;
              return (
                <TableRow key={item._id}>
                  <TableCell component="th" scope="row">
                    {date}
                  </TableCell>
                  <TableCell align="left">{description}</TableCell>
                  <TableCell align="left">{category}</TableCell>
                  {value}
                  <TableCell align="left">{action}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AccountTable;
