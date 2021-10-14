const getUserBalance = state => state.ledger.transaction.balance;
const getReportSliderValue = state => state.ledger.reportSliderValue;
const incomesByMonthData = state => state.ledger.incomeByMonth;
const expenseByMonthData = state => state.ledger.expenseByMonth;

export default {
  getUserBalance,
  getReportSliderValue,
  incomesByMonthData,
  expenseByMonthData,
};
