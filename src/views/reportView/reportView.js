import React from 'react';
import ReportSlider from '../../components/reportsSlider';
import ReportsChart from '../../components/reportsChart';
import ReportByMonth from '../../components/reportByMonth';
import MobileTable from '../../components/tabs/mobileTable';

const reportView = () => (
  <>
    <ReportByMonth />
    <ReportSlider />
    <ReportsChart />
  </>
);

export default reportView;
