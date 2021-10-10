import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from './auth-actions';

const initialUserState = { email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.googleSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => null,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.user,
  [authActions.getCurrentBalanceSuccess]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.googleSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.googleSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.googleError]: () => false,
  [authActions.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
});
