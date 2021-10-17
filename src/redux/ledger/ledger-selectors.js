const getUserBalance = state => state.ledger.transaction.balance;
const getReportSliderValue = state => state.ledger.reportSliderValue;
const incomesByMonthData = state => state.ledger.incomeByMonth;
const expenseByMonthData = state => state.ledger.expenseByMonth;
const incomesByYear = state => state.ledger.transactionsByYear[0].incomes;
const expenseByYear = state => state.ledger.transactionsByYear[0].expense;
const errorByYear = state => state.ledger.errorByYear;

export default {
  getUserBalance,
  getReportSliderValue,
  incomesByMonthData,
  expenseByMonthData,
  errorByYear,
  incomesByYear,
  expenseByYear,
};
