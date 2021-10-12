import axios from 'axios';
import ledgerActions from './ledger-actions';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com';

const addUserIncome = transaction => async dispatch => {
  dispatch(ledgerActions.addUserIncomeRequest());
  try {
    const response = await axios.post('/api/ledgers/income', transaction);
    dispatch(ledgerActions.addUserIncomeSuccess(response.data));
  } catch (error) {
    dispatch(ledgerActions.addUserIncomeError(error.message));
  }
};

const addUserExpense = transaction => async dispatch => {
  dispatch(ledgerActions.addUserExpenseRequest);
  try {
    const response = await axios.post('/api/ledgers/expense', transaction);
    dispatch(ledgerActions.addUserExpenseSuccess(response.data));
  } catch (error) {
    dispatch(ledgerActions.addUserExpenseError(error.message));
  }
};

export default { addUserIncome, addUserExpense };
