import axios from 'axios';
import authActions from './auth-actions';
import api from '../../service/api';

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
    const response = await api.registration(credentials);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await api.login(credentials);
    token.set(response.data.token);

    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const google = credentials => async dispatch => {
  dispatch(authActions.googleRequest());
  try {
    const response = await api.google(credentials);
    token.set(response.data.token);

    dispatch(authActions.googleSuccess(response.data));
  } catch (error) {
    dispatch(authActions.googleError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await api.logout();
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
    const response = await api.getCurrentUser();
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const getCurrentBalance = balanceValue => async dispatch => {
  dispatch(authActions.getCurrentBalanceRequest());

  try {
    const response = await api.refreshUserBalance({
      value: balanceValue,
    });

    dispatch(authActions.getCurrentBalanceSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentBalanceError(error.message));
  }
};

export default {
  register,
  login,
  logOut,
  getCurrentUser,
  getCurrentBalance,
  google,
};
