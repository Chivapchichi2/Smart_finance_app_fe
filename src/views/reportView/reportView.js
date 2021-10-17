import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReportSlider from '../../components/reportsSlider';
import ReportsChart from '../../components/reportsChart';
import ReportByMonth from '../../components/reportByMonth';
import { ledgerSelectors, ledgerActions } from '../../redux/ledger';

const reportView = () => {
  const dispatch = useDispatch();

  const chartValueExpense = useSelector(ledgerSelectors.getExpenseChartValue);
  const chartValueIncome = useSelector(ledgerSelectors.getIncomeChartValue);
  const reportSliderValue = useSelector(ledgerSelectors.getReportSliderValue);

  useEffect(
    () => () => {
      dispatch(ledgerActions.setExpenseChartValue([]));
    },

    [dispatch],
  );

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
