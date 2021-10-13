import axios from 'axios';
import { userActions } from '../user';
import ledgerActions from './ledger-actions';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com';

const addUserBank = (endpoint, transaction) => async dispatch => {
  dispatch(userActions.setCurrentBalanceRequest());
  try {
    const response = await axios.post(endpoint, transaction);

    dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(userActions.setCurrentBalanceError(error.message));
  }
};

const getIncomeByMonth = date => async dispatch => {
  dispatch(ledgerActions.getUserIncomeByMonthRequest());
  try {
    const response = await axios.get(`/api/ledgers/income/${date}`);

    dispatch(ledgerActions.getUserIncomeByMonthSuccess(response.data));
  } catch (error) {
    dispatch(ledgerActions.getUserIncomeByMonthError(error.message));
  }
};

const getExpenseByMonth = date => async dispatch => {
  dispatch(ledgerActions.getUserExpenseByMonthRequest());
  try {
    const response = await axios.get(`/api/ledgers/income/${date}`);

    dispatch(ledgerActions.getUserExpenseByMonthSuccess(response.data));
  } catch (error) {
    dispatch(ledgerActions.getUserExpenseByMonthError(error.message));
  }
};

export default { addUserBank, getIncomeByMonth, getExpenseByMonth };
