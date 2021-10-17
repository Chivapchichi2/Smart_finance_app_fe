import axios from 'axios';
import { toast } from 'react-toastify';
import { userActions } from '../user';
import ledgerActions from './ledger-actions';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com';

const addUserBank = (endpoint, transaction) => async dispatch => {
  dispatch(userActions.setCurrentBalanceRequest());
  dispatch(ledgerActions.getUserTransactionsByYearRequest());
  try {
    const response = await axios.post(endpoint, transaction);

    dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));
    dispatch(
      ledgerActions.getUserTransactionsByYearSuccess(response.data.ledger),
    );
  } catch (error) {
    dispatch(userActions.setCurrentBalanceError(error.message));
    dispatch(ledgerActions.getUserTransactionsByYearError(error.message));

    toast.warn(error.response.data.message);
    console.log(error.response.data.message);
  }
};

const getIncomeByMonth = date => async dispatch => {
  dispatch(ledgerActions.getUserIncomeByMonthRequest());
  try {
    const response = await axios.get(`/api/ledgers/income/${date}`);
    const resp = response.data.reverse();

    await dispatch(ledgerActions.getUserIncomeByMonthSuccess(resp));
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
    const response = await axios.delete(`/api/ledgers/${transactionId}`);

    await dispatch(ledgerActions.deleteUserTransactionSuccess(transactionId));
    await dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));
  } catch (error) {
    // console.log(error);
    dispatch(ledgerActions.deleteUserTransactionError(error.message));
    toast.error(error.response.message);
  }
};

export default {
  addUserBank,
  getIncomeByMonth,
  getExpenseByMonth,
  deleteUserTransaction,
};
