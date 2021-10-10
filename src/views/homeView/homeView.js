import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes/routes';

import { MainHome, BoxHome, CustomTabs } from '../../components';
import Modal from '../../components/modal';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';

// import MobileReports from '../../components/tabs/mobileReports';

import HomeNav from '../../components/container/homeContainer/homeNav';
import ReportView from '../reportView';

// import ReportsSlider from '../../components/reportsSlider';
// import ReportByMonth from '../../components/reportByMonth';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);
  const width = useWindowWidth();

  return (
    <MainHome>
      <BoxHome />
      {/* <MobileReports reports={data} /> */}
      {showModal && <Modal text="Вы действительно хотите выйти?" />}
      <BalanceWrapper />

      {width <= 767 && <HomeNav />}

      <Switch>
        <Route exact path={routes.homePage} component={CustomTabs} />
        <Route exact path={routes.reportPage} component={ReportView} />
        {/* <Redirect to={routes.homePage} /> */}
      </Switch>
      {/* {width > 767 && <CustomTabs />} */}
    </MainHome>
  );
};

export default HomeView;
