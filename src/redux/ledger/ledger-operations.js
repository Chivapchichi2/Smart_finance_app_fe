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

export default { addUserIncome };
