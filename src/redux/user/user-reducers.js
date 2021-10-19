import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import userActions from './user-actions';

const balance = createReducer(0, {
  [userActions.setCurrentBalanceSuccess]: (_, { payload }) => payload,
});

const balanceError = createReducer('', {
  [userActions.setCurrentBalanceError]: (_, { payload }) => payload,
});

export default combineReducers({
  balance,
  balanceError,
});
