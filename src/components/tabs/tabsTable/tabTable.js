import React, {
  useEffect,
  useState,
  // createRef
} from 'react';
import PropTypes from 'prop-types';

// import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import {
  // Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import iconDelete from './delete.svg';

import styles from './styles';

const AccountTable = props => {
  const { eager } = props;

  // const tableRef = createRef();

  const classes = makeStyles(theme => styles(theme))();

  const [state, setState] = useState({
    headers: [],
    rows: [],
  });

  // const tableOptions = {
  //   search: false,
  //   toolbar: false,
  //   actionsColumnIndex: -1,
  //   actionsColumn: '',
  //   emptyRowsWhenPaging: false,
  //   pageSize: 7,
  //   pageSizeOptions: [7, 14, 21],
  // };

  // const localization = {
  //   toolbar: { searchPlaceholder: 'Search' },
  //   pagination: { labelRowsSelect: 'Rows' },
  //   body: { emptyDataSourceMessage: 'No data' },
  // };

  useEffect(() => {
    setState(prev => ({
      ...prev,
      headers: [
        { title: 'Дата', field: 'date' },
        { title: 'Описание', field: 'description' },
        { title: 'Категория', field: 'category' },
        { title: 'Сумма', field: 'sum' },
        { title: '', field: 'action' },
      ],
    }));

    if (eager) {
      setState(prev => ({
        ...prev,
        rows: [
          {
            date: '09.10.2021',
            description: 'tttttt',
            category: 'food',
            sum: '-300',
          },
          {
            date: '09.10.2021',
            description: 'yummy',
            category: 'food',
            sum: '200',
          },
          {
            date: '09.10.2021',
            description: 'yummy',
            category: 'food',
            sum: '-100',
          },
          {
            date: '09.10.2021',
            description: 'yummy',
            category: 'food',
            sum: '350',
          },
          {
            date: '09.10.2021',
            description: 'yummy',
            category: 'food',
            sum: '100',
          },
          {
            date: '09.10.2021',
            description: 'yummy',
            category: 'food',
            sum: '350',
          },
        ],
      }));
    }
  }, []);

  const onDeleteHandler = () => {};

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
    sum:
      item.sum > 0 ? (
        <span className="high">{item.sum}</span>
      ) : (
        <span className="low">{item.sum}</span>
      ),
    action: getAction(),
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
              const { date, description, category, sum, action } = item;
              return (
                <TableRow key={date + description + sum + Math.random()}>
                  <TableCell component="th" scope="row">
                    {date}
                  </TableCell>
                  <TableCell align="left">{description}</TableCell>
                  <TableCell align="left">{category}</TableCell>
                  <TableCell align="left">{sum}</TableCell>
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
AccountTable.propTypes = { eager: PropTypes.bool.isRequired };

export default AccountTable;
