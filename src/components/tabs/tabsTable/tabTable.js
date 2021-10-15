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

  const [dater, setDater] = useState(new Date());

  const getMonthAndYear = `${dater.getMonth() + 1}.${dater.getFullYear()}`;

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
    inc && dispatch(ledgerOperations.getIncomeByMonth(getMonthAndYear));
    exp && dispatch(ledgerOperations.getExpenseByMonth(getMonthAndYear));
  }, [dispatch, dater]);

  const onDeleteHandler = id => {
    dispatch(ledgerOperations.deleteUserTransaction(id));

    inc && dispatch(ledgerOperations.getIncomeByMonth(getMonthAndYear));
    exp && dispatch(ledgerOperations.getExpenseByMonth(getMonthAndYear));
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

  const result = rows.map(item => ({
    ...item,
    value: inc ? (
      <span className="high">{item.value}</span>
    ) : (
      <span className="low">{item.value}</span>
    ),
    action: getAction(item._id),
  }));

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
                <TableRow key={date + description + value + Math.random()}>
                  <TableCell component="th" scope="row">
                    {date}
                  </TableCell>
                  <TableCell align="left">{description}</TableCell>
                  <TableCell align="left">{category}</TableCell>
                  <TableCell align="left">{value}</TableCell>
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
