import axios from 'axios';
import userActions from './user-actions';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com';

const getCurrentBalance = balanceValue => async dispatch => {
  dispatch(userActions.getCurrentBalanceRequest());

  try {
    const response = await axios.patch('/api/users/balance', {
      value: balanceValue,
    });

    dispatch(userActions.getCurrentBalanceSuccess(response.data));
  } catch (error) {
    dispatch(userActions.getCurrentBalanceError(error.message));
  }
};

// const addUserBank = (endpoint, transaction) => async dispatch => {
//   dispatch(userActions.getCurrentBalanceRequest());
//   try {
//     const response = await axios.post(endpoint, transaction);

//     dispatch(userActions.getCurrentBalanceSuccess(response.data));
//   } catch (error) {
//     dispatch(userActions.getCurrentBalanceError(error.message));
//   }
// };

export default {
  getCurrentBalance,
  // addUserBank,
};
