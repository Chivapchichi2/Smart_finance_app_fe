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

const deleteUserTransaction = createReducer([], {
  [ledgerActions.deleteUserTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const reportSliderValue = createReducer('Расходы', {
  [ledgerActions.setReportSliderValue]: (_, { payload }) => payload,
});

const transactionsByYear = createReducer([], {
  [ledgerActions.getUserTransactionsByYearSuccess]: (_, { payload }) => [
    payload,
  ],
});

const errorByYear = createReducer('', {
  [ledgerActions.getUserExpenseByYearError]: (_, { payload }) => payload,
});

export default combineReducers({
  expenses,
  incomes,
  incomeByMonth,
  expenseByMonth,
  reportSliderValue,
  deleteUserTransaction,
  transactionsByYear,
  errorByYear,
});
