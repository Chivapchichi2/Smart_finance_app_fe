import { createAction } from '@reduxjs/toolkit';

const getCurrentBalanceRequest = createAction('user/getCurrentBalanceRequest');
const getCurrentBalanceSuccess = createAction('user/getCurrentBalanceSuccess');
const getCurrentBalanceError = createAction('user/getCurrentBalanceError');

export default {
  getCurrentBalanceRequest,
  getCurrentBalanceSuccess,
  getCurrentBalanceError,
};
