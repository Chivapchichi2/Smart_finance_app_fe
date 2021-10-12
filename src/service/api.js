import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance-app-be.herokuapp.com/';

const serviceApi = {
  refreshUserBalan(balance) {
    return axios.patch(`api/users/balance`, balance);
  },

  addUserIncome(endpoint, transaction) {
    return axios.post(endpoint, transaction);
  },
  // addUserExpense(transaction) {
  //   return axios.post(`api/ledgers/expense`, transaction);
  // },
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
