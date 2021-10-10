import axios from 'axios';
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

  try {
    const response = await axios.post('/api/users/signup', credentials);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post('/api/users/signin', credentials);
    token.set(response.data.token);

    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.get('/api/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
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

  try {
    const response = await axios.get('/api/users/current');
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const getCurrentBalance = balanceValue => async dispatch => {
  dispatch(authActions.getCurrentBalanceRequest());

  try {
    const response = await axios.patch('/api/users/balance', {
      value: balanceValue,
    });
    console.log(response);
    console.log(response.data);
    dispatch(authActions.getCurrentBalanceSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentBalanceError(error.message));
  }
};

export default { register, login, logOut, getCurrentUser, getCurrentBalance };
