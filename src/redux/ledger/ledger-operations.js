import axios from 'axios';
import { userActions } from '../user';

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

export default { addUserBank };
