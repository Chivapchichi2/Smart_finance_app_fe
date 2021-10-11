import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { useLocation, Route, Switch, Redirect } from 'react-router-dom';

import routes from '../../routes/routes';

import ReportView from '../reportView';
import MobileExpensesView from './expensesView';
import MobileIncomesView from './incomesView';

import { MainHome, BoxHome, CustomTabs } from '../../components';
import Modal from '../../components/modal';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
import HomeNav from '../../components/container/homeContainer/homeNav';
import DatePicker from '../../components/tabs/tabsForm/input/datePicker';
import MobileTable from '../../components/tabs/mobileTable';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);
  const width = useWindowWidth();
  const location = useLocation();

  return (
    <MainHome>
      <BoxHome />

      {location.pathname === routes.reportIncomes ||
      location.pathname === routes.reportExpenses ? null : (
        <BalanceWrapper />
      )}
      {/* <BalanceWrapper /> */}

      {location.pathname === routes.homePage && width <= 767 ? (
        <>
          <DatePicker />
          <MobileTable />
          <HomeNav />
        </>
      ) : null}

      <Switch>
        <Route
          exact
          path={routes.homePage}
          component={width > 767 && CustomTabs}
        />
        <Route path={routes.reportPage} component={ReportView} />
        <Route path={routes.reportExpenses} component={MobileExpensesView} />
        <Route path={routes.reportIncomes} component={MobileIncomesView} />

        <Redirect to={routes.homePage} />
      </Switch>

      {showModal && <Modal text="Вы действительно хотите выйти?" />}
    </MainHome>
  );
};

export default HomeView;
