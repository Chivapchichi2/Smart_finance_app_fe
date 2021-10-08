import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from './auth-actions';

const initialUserState = { email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.newUser,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
});
