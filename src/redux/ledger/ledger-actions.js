import { createAction } from '@reduxjs/toolkit';

const addUserIncomeRequest = createAction('ledger/addUserIncomeRequest');
const addUserIncomeSuccess = createAction('ledger/addUserIncomeSuccess');
const addUserIncomeError = createAction('ledger/addUserIncomeError');

const addUserExpenseRequest = createAction('ledger/addUserExpenseRequest');
const addUserExpenseSuccess = createAction('ledger/addUserExpenseSuccess');
const addUserExpenseError = createAction('ledger/addUserExpenseError');

const getUserIncomeByMonthRequest = createAction(
  'ledger/getUserIncomeByMonthRequest',
);
const getUserIncomeByMonthSuccess = createAction(
  'ledger/getUserIncomeByMonthSuccess',
);
const getUserIncomeByMonthError = createAction(
  'ledger/getUserIncomeByMonthError',
);

const getUserExpenseByMonthRequest = createAction(
  'ledger/getUserExpenseByMonthRequest',
);
const getUserExpenseByMonthSuccess = createAction(
  'ledger/getUserExpenseByMonthSuccess',
);
const getUserExpenseByMonthError = createAction(
  'ledger/getUserExpenseByMonthError',
);

const getUserTransactionsByYearRequest = createAction(
  'ledger/getUserTransactionsByYearRequest',
);
const getUserTransactionsByYearSuccess = createAction(
  'ledger/getUserTransactionsByYearSuccess',
);
const getUserTransactionsByYearError = createAction(
  'ledger/getUserTransactionsByYearError',
);

const deleteUserTransactionRequest = createAction(
  'ledger/deleteUserTransactionRequest',
);
const deleteUserTransactionSuccess = createAction(
  'ledger/deleteUserTransactionSuccess',
);
const deleteUserTransactionError = createAction(
  'ledger/deleteUserTransactionError',
);

const getSummaryByYearRequest = createAction('ledger/getSummaryByYearRequest');
const getSummaryByYearSuccess = createAction('ledger/getSummaryByYearSuccess');
const getSummaryByYearError = createAction('ledger/getSummaryByYearError');

const setReportSliderValue = createAction('ledger/setReportSliderValue');

const setCurrentDateValue = createAction('ledger/setCurrentDateValue');

const setExpenseChartValue = createAction('ledger/setExpenseChartValue');

const setIncomeChartValue = createAction('ledger/setIncomeChartValue');

const setCurrentPeriodDate = createAction('ledger/setCurrentPeriodDate');

export default {
  addUserIncomeRequest,
  addUserIncomeSuccess,
  addUserIncomeError,
  addUserExpenseRequest,
  addUserExpenseSuccess,
  addUserExpenseError,
  getUserIncomeByMonthRequest,
  getUserIncomeByMonthSuccess,
  getUserIncomeByMonthError,
  getUserExpenseByMonthRequest,
  getUserExpenseByMonthSuccess,
  getUserExpenseByMonthError,
  setReportSliderValue,
  deleteUserTransactionRequest,
  deleteUserTransactionSuccess,
  deleteUserTransactionError,
  getUserTransactionsByYearRequest,
  getUserTransactionsByYearSuccess,
  getUserTransactionsByYearError,
  setCurrentDateValue,
  setExpenseChartValue,
  setIncomeChartValue,
  setCurrentPeriodDate,
  getSummaryByYearRequest,
  getSummaryByYearSuccess,
  getSummaryByYearError,
};
