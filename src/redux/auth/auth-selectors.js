const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserEmail = state => state.auth.user.email;

const getUserAvatar = state => state.auth.user.avatarURL;

export default { getIsAuthenticated, getUserEmail, getUserAvatar };
