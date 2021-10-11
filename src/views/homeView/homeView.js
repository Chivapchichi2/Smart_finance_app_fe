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
import TabForm from '../../components/tabs/tabsForm/tabForm';
import MobileTable from '../../components/tabs/mobileTable/mobileTable';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);
  const width = useWindowWidth();

  return (
    <MainHome>
      <BoxHome />

      {showModal && <Modal text="Вы действительно хотите выйти?" />}
      <BalanceWrapper />

      {width <= 767 && <HomeNav />}

      <Switch>
        <Route
          exact
          path={routes.homePage}
          component={width > 767 ? CustomTabs : MobileTable}
        />
        <Route exact path={routes.reportPage} component={ReportView} />
        <Redirect to={routes.homePage} />
      </Switch>
      {/* {} */}
    </MainHome>
  );
};

export default HomeView;
