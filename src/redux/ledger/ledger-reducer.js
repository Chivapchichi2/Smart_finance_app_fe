import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import ledgerActions from './ledger-actions';

const initialUserState = { transaction: null, balance: 0 };

const transaction = createReducer(initialUserState, {
  [ledgerActions.addUserIncomeSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [ledgerActions.addUserExpenseSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
});

export default combineReducers({ transaction });
