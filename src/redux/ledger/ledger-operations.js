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

export default { addUserBank };
