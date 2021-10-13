import { createAction } from '@reduxjs/toolkit';

const setCurrentBalanceRequest = createAction('user/setCurrentBalanceRequest');
const setCurrentBalanceSuccess = createAction('user/setCurrentBalanceSuccess');
const setCurrentBalanceError = createAction('user/setCurrentBalanceError');

export default {
  setCurrentBalanceRequest,
  setCurrentBalanceSuccess,
  setCurrentBalanceError,
};
