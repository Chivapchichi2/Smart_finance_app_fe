import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const AccountTable = props => {
  const { account, eager, getHeaders, getRows } = props;

  const classes = makeStyles(theme => styles(theme))();

  const [state, setState] = useState({
    headers: [],
    rows: [],
  });

  const tableOptions = {
    search: false,
    toolbar: false,
    pageSize: 10,
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
        { title: '', field: 'action' },
      ],
    }));

    if (eager) {
      getRows()
        .then(res => res.data)
        .then(res => {
          setState(prev => ({ ...prev, rows: res.data || res }));
        })
        .catch(err => console.log(err));
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
            columns={headers}
            localization={localization}
            title=""
            data={
              eager ? rows : ''
              // /*: getPaginatedData()*/
            }
            options={tableOptions}
            actions={[
              {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert('You saved '),
              },
              {
                icon: 'delete',
                tooltip: 'Delete User',
                onClick: (event, rowData) => alert('You want to delete '),
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountTable;
