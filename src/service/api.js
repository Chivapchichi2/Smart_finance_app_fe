import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com/';

const serviceApi = {
  registration(data) {
    return axios.post(`api/users/signup`, data);
  },
  login(data) {
    return axios.post(`api/users/signin`, data);
  },
  logout() {
    return axios.get(`api/users/logout`);
  },
  getCurrentUser() {
    return axios.get(`api/users/current`);
  },
  refreshUserBalance(balance) {
    return axios.patch(`api/users/balance`, balance);
  },

  google(data) {
    return axios.post(`api/users/google`, data);
  },
  
  addUserIncome(endpoint, transaction) {
    return axios.post(endpoint, transaction);
  },
 
  deleteTransaction(id) {
    return axios.delete(`api/ledgers/:${id}`);
  },
  getIncomeByMonth(date) {
    return axios.get(`api/ledgers/income/:${date}`).then(r => r.data);
  },
  getExpenseByMonth(date) {
    return axios.get(`api/ledgers/expense/:${date}`).then(r => r.data);
  },
};
export default serviceApi;
