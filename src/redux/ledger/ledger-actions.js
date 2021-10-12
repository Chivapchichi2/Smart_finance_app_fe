import { createAction } from '@reduxjs/toolkit';

const addUserIncomeRequest = createAction('ledger/addUserIncomeRequest');
const addUserIncomeSuccess = createAction('ledger/addUserIncomeSuccess');
const addUserIncomeError = createAction('ledger/addUserIncomeError');

export default {
  addUserIncomeRequest,
  addUserIncomeSuccess,
  addUserIncomeError,
};
