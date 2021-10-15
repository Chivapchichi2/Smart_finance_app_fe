import axios from 'axios';
import { userActions } from '../user';
import ledgerActions from './ledger-actions';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com';

const addUserBank = (endpoint, transaction) => async dispatch => {
  dispatch(userActions.setCurrentBalanceRequest());
  try {
    const response = await axios.post(endpoint, transaction);

    dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));

    if (endpoint === 'api/ledgers/income') {
      dispatch(ledgerActions.addUserIncomeSuccess(response.data.transaction));
    } else {
      dispatch(ledgerActions.addUserExpenseSuccess(response.data.transaction));
    }
  } catch (error) {
    dispatch(userActions.setCurrentBalanceError(error.message));
  }
};

const getIncomeByMonth = date => async dispatch => {
  dispatch(ledgerActions.getUserIncomeByMonthRequest());
  try {
    const response = await axios.get(`/api/ledgers/income/${date}`);
    const resp = response.data.reverse();

    dispatch(ledgerActions.getUserIncomeByMonthSuccess(resp));
  } catch (error) {
    dispatch(ledgerActions.getUserIncomeByMonthError(error.message));
  }
};

const getExpenseByMonth = date => async dispatch => {
  dispatch(ledgerActions.getUserExpenseByMonthRequest());
  try {
    const response = await axios.get(`/api/ledgers/expense/${date}`);
    const resp = response.data.reverse();

    dispatch(ledgerActions.getUserExpenseByMonthSuccess(resp));
  } catch (error) {
    dispatch(ledgerActions.getUserExpenseByMonthError(error.message));
  }
};

const deleteUserTransaction = transactionId => async dispatch => {
  dispatch(ledgerActions.deleteUserTransactionRequest());
  try {
    await axios.delete(`/api/ledgers/${transactionId}`);

    await dispatch(ledgerActions.deleteUserTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(ledgerActions.deleteUserTransactionError(error.message));
  }
};

export default {
  addUserBank,
  getIncomeByMonth,
  getExpenseByMonth,
  deleteUserTransaction,
};
