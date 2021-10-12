import { createAction } from '@reduxjs/toolkit';

const addUserIncomeRequest = createAction('ledger/addUserIncomeRequest');
const addUserIncomeSuccess = createAction('ledger/addUserIncomeSuccess');
const addUserIncomeError = createAction('ledger/addUserIncomeError');

const addUserExpenseRequest = createAction('ledger/addUserExpenseRequest');
const addUserExpenseSuccess = createAction('ledger/addUserExpenseSuccess');
const addUserExpenseError = createAction('ledger/addUserExpenseError');

export default {
  addUserIncomeRequest,
  addUserIncomeSuccess,
  addUserIncomeError,
  addUserExpenseRequest,
  addUserExpenseSuccess,
  addUserExpenseError,
};
