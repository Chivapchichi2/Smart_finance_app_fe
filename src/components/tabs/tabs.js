import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import withStyles from '@material-ui/core/styles/withStyles';
import TabForm from './tabsForm/tabForm';
import TabSummary from './tabsSummary';
import AccountTable from './tabsTable/tabTable';
import monthData from './tabsSummary/monthData';
import { ledgerSelectors } from '../../redux/ledger';
import {
  endpoints,
  expensesCategory,
  incomesCategory,
  catIncomes,
  catExpenses,
} from '../../helpers';

import { styles } from './styles';

const CustomTabs = props => {
  const { classes } = props;

  const [value, setValue] = useState('1');

  const incomesByYear = useSelector(ledgerSelectors.incomesByYear);
  const expensesByYear = useSelector(ledgerSelectors.expenseByYear);
  const currentYear = useSelector(ledgerSelectors.datepickerValue);
  const parsedYear = currentYear.substr(3, 4);
  const currentYearData = Object.keys(
    expensesByYear[parsedYear] ? expensesByYear[parsedYear] : [],
  );
  let expenses;
  let incomes;
  if (currentYearData) {
    expenses = currentYearData.map(
      i => `${monthData[+i - 1]} ${expensesByYear[parsedYear][i]}`,
    );
  } else {
    expenses = [];
  }
  if (currentYearData) {
    incomes = currentYearData.map(
      i => `${monthData[+i - 1]} ${incomesByYear[parsedYear][i]}`,
    );
  } else {
    incomes = [];
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Расход" value="1" />
              <Tab label="Доход" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <TabForm
              endpoint={endpoints.expense}
              data={expensesCategory}
              catName={catExpenses}
              exp
            />
            <AccountTable exp />
            <TabSummary data={expenses} />
          </TabPanel>
          <TabPanel value="2">
            <TabForm
              endpoint={endpoints.income}
              data={incomesCategory}
              catName={catIncomes}
              inc
            />
            <AccountTable inc />
            <TabSummary data={incomes} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
CustomTabs.propTypes = { classes: PropTypes.shape().isRequired };

export default withStyles(styles)(CustomTabs);
