import { useSelector } from 'react-redux';
import ReportSlider from '../../components/reportsSlider';
import ReportsChart from '../../components/reportsChart';
import ReportByMonth from '../../components/reportByMonth';
import { ledgerSelectors } from '../../redux/ledger';

const reportView = () => {
  const chartValueExpense = useSelector(ledgerSelectors.getExpenseChartValue);
  const chartValueIncome = useSelector(ledgerSelectors.getIncomeChartValue);
  const reportSliderValue = useSelector(ledgerSelectors.getReportSliderValue);

  return (
    <>
      <ReportByMonth />
      <ReportSlider />
      {chartValueExpense.length > 0 && reportSliderValue === 'Расходы' && (
        <ReportsChart />
      )}
      {chartValueIncome.length > 0 && reportSliderValue === 'Доходы' && (
        <ReportsChart />
      )}
    </>
  );
};

export default reportView;
