/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, createRef } from 'react';
import { Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import iconDelete from './delete.svg';

import styles from './styles';

const AccountTable = props => {
  const { eager } = props;

  const tableRef = createRef();

  const classes = makeStyles(theme => styles(theme))();

  const [state, setState] = useState({
    headers: [],
    rows: [],
  });

  const tableOptions = {
    search: false,
    toolbar: false,
    actionsColumnIndex: -1,
    actionsColumn: '',
    emptyRowsWhenPaging: false,
    pageSize: 7,
    pageSizeOptions: [7, 14, 21],
  };

  const localization = {
    toolbar: { searchPlaceholder: 'Search' },
    pagination: { labelRowsSelect: 'Rows' },
    body: { emptyDataSourceMessage: 'No data' },
  };

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
            description: ` <Switch>
      <Route path={routes.homeExpenses} component={ExpensesView} />
      <Route path={routes.homeIncomes} component={IncomesView} />
      <Redirect to={routes.homeExpenses} />
      </Switch> }`,
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
    />
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
      <Grid container>
        <Grid item xs={12}>
          {/* <MaterialTable
            tableRef={tableRef}
            columns={headers}
            localization={localization}
            title=""
            data={eager ? result : ''}
            options={tableOptions}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountTable;
