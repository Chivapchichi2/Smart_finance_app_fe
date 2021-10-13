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
  [ledgerActions.getUserIncomeByMonthSuccess]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
});
const expenseByMonth = createReducer([], {
  [ledgerActions.getUserExpenseByMonthSuccess]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
});

export default combineReducers({ expenses, incomes, incomeByMonth, expenseByMonth });


