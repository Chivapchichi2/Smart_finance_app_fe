import axios from 'axios';
<<<<<<< HEAD
import { toast } from 'react-toastify';
=======
import ledgerActions from '../ledger/ledger-actions';
>>>>>>> origin/dev
import userActions from '../user/user-actions';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com';

const token = {
  // eslint-disable-next-line no-shadow
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());
  dispatch(userActions.setCurrentBalanceRequest());
  try {
    const response = await axios.post('/api/users/signup', credentials);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
    dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    toast.warn(error.response.data.message);
  }
};

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  dispatch(userActions.setCurrentBalanceRequest());
  try {
    const response = await axios.post('/api/users/signin', credentials);
    token.set(response.data.token);

    dispatch(authActions.loginSuccess(response.data));
    dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    toast.warn(error.response.data.message);
  }
};

const google = credentials => async dispatch => {
  dispatch(authActions.googleRequest());
  dispatch(userActions.setCurrentBalanceRequest());
  try {
    const response = await axios.post('/api/users/google', credentials);
    token.set(response.data.token);

    dispatch(authActions.googleSuccess(response.data));
    dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));
  } catch (error) {
    dispatch(authActions.googleError(error.message));
    toast.warn(error.response.data.message);
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.get('/api/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
    dispatch(authActions.isModalShow());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
    toast.warn(error.response.data.message);
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  dispatch(userActions.setCurrentBalanceRequest());
  dispatch(ledgerActions.getUserTransactionsByYearRequest());
  try {
    const response = await axios.get('/api/users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data));
    dispatch(userActions.setCurrentBalanceSuccess(response.data.balance));
    dispatch(
      ledgerActions.getUserTransactionsByYearSuccess(response.data.ledger),
    );
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    toast.warn(error.response.data.message);
    dispatch(ledgerActions.getUserTransactionsByYearError(error.message));
  }
};

export default {
  register,
  login,
  logOut,
  getCurrentUser,
  google,
};
