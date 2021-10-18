const getUserBalance = state => state.ledger.transaction.balance;
const getReportSliderValue = state => state.ledger.reportSliderValue;
const incomesByMonthData = state => state.ledger.incomeByMonth;
const expenseByMonthData = state => state.ledger.expenseByMonth;
const incomesByYear = state => state.ledger.transactionsByYear[0].incomes;
const expenseByYear = state => state.ledger.transactionsByYear[0].expense;
const errorByYear = state => state.ledger.errorByYear;
const datepickerValue = state => state.ledger.setDateValue;
const currentPeriodDateValue = state => state.ledger.currentPeriodDate;
const getExpenseChartValue = state => state.ledger.expenseChartValue;
const getIncomeChartValue = state => state.ledger.incomeChartValue;
const getResetedInputValues = state => state.ledger.resetValuesOfInput;

export default {
  getUserBalance,
  getReportSliderValue,
  incomesByMonthData,
  expenseByMonthData,
  errorByYear,
  incomesByYear,
  expenseByYear,
  datepickerValue,
  getExpenseChartValue,
  getIncomeChartValue,
  currentPeriodDateValue,
  getResetedInputValues,
};
