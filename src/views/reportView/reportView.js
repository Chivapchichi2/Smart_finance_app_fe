import React from 'react';
import ReportSlider from '../../components/reportsSlider';
import ReportsChart from '../../components/reportsChart';
import ReportByMonth from '../../components/reportByMonth';
// import MobileTable from '../../components/tabs/mobileTable';

const data = { income: 1111, expense: 2222 };

const reportView = () => (
  <>
    <ReportByMonth data={data} />
    <ReportSlider />
    <ReportsChart />
  </>
);

export default reportView;
