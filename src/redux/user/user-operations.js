import axios from 'axios';
import userActions from './user-actions';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com';

const setCurrentBalance = balanceValue => async dispatch => {
  dispatch(userActions.setCurrentBalanceRequest());

  try {
    const response = await axios.patch('/api/users/balance', {
      value: balanceValue,
    });
    dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(userActions.setCurrentBalanceError(error.message));
  }
};

export default {
  setCurrentBalance,
};
