import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import ledgerActions from './ledger-actions';

const expenses = createReducer([], {
  [ledgerActions.addUserExpenseSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
});

const incomes = createReducer([], {
  [ledgerActions.addUserIncomeSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
});

const incomeByMonth = createReducer([], {
  [ledgerActions.getUserIncomeByMonthSuccess]: (_, { payload }) => [...payload],
});

const expenseByMonth = createReducer([], {
  [ledgerActions.getUserExpenseByMonthSuccess]: (_, { payload }) => [
    ...payload,
  ],
});

const incomeByMonthError = createReducer('', {
  [ledgerActions.getUserIncomeByMonthError]: (_, { payload }) => payload,
});

const expenseByMonthError = createReducer('', {
  [ledgerActions.getUserExpenseByMonthError]: (_, { payload }) => payload,
});

const deleteUserTransaction = createReducer([], {
  [ledgerActions.deleteUserTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const reportSliderValue = createReducer('Расходы', {
  [ledgerActions.setReportSliderValue]: (_, { payload }) => payload,
});

const setDateValue = createReducer('', {
  [ledgerActions.setCurrentDateValue]: (_, { payload }) => payload,
});

export default combineReducers({
  expenses,
  incomes,
  incomeByMonth,
  expenseByMonth,
  incomeByMonthError,
  reportSliderValue,
  expenseByMonthError,
  deleteUserTransaction,
  setDateValue,
});
