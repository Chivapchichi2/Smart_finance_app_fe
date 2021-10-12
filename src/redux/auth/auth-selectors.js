const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserEmail = state => state.auth.user.email;

const getUserAvatar = state => state.auth.user.avatarURL;

const getUserBalance = state => state.auth.user.balance;

const getModal = state => state.auth.isShowModal;

export default {
  getIsAuthenticated,
  getUserEmail,
  getUserAvatar,
  getUserBalance,
  getModal,
};
