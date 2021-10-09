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
    pageSize: 5,
    pageSizeOptions: [10, 20, 100],
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
        // { title: '', field: 'action' },
      ],
    }));

    if (eager) {
      setState(prev => ({
        ...prev,
        rows: [
          {
            date: '09.10.2021',
            description: 'yummy',
            category: 'food',
            sum: '300',
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
            sum: '100',
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

  // const getPaginatedData = query => {
  //   const { rows } = state;
  //   new Promise((resolve, reject) => {
  //     const params = {
  //       page: query?.page + 1,
  //       perPage: query?.pageSize,
  //       orderBy: query?.orderBy ? query.orderBy.field : '',
  //       orderType: query?.orderDirection || '',
  //       filters: query?.filters,
  //     };

  //     resolve({
  //       data: rows.data,
  //       page: rows.current_page - 1,
  //       totalCount: rows.total,
  //     });
  //   });
  // };

  const { headers, rows } = state;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <MaterialTable
            tableRef={tableRef}
            columns={headers}
            localization={localization}
            icons
            title=""
            data={
              eager ? rows : ''
              // /*: getPaginatedData()*/
            }
            options={tableOptions}
            editable={{
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  resolve();
                }),
            }}
            // actions={[
            //   {
            //     icon: iconDelete,
            //     tooltip: 'Delete User',
            //     onClick: (event, rowData) => alert('You want to delete '),
            //   },
            // ]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountTable;
