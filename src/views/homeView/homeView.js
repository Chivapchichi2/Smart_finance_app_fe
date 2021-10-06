import TabsSummary from '../../components/tabs/tabsSummary';
// import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import { MainHome, BoxHome } from '../../components';
import Modal from '../../components/modal';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
// import GoToReports from '../../components/balanceWrapper/goToReports';
// import BackToMain from '../../components/balanceWrapper/backToMain';
// import Balance from '../../components/balanceWrapper/balance';
// import CurrentPeriod from '../../components/balanceWrapper/currentPeriod';
// import routes from '../../routes/routes';
// import HomeNav from '../../components/container/homeContainer/homeNav';
// import Notification from '../../components/notification';
// import ReportsSlider from '../../components/reportsSlider';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <MainHome>
      <BoxHome />
      {showModal && <Modal text="Вы действительно хотите выйти?" />}
      <BalanceWrapper>
        {/* <HomeNav /> */}
        {/* Окошко нотификации  */}
        {/* <Notification /> */}
        {/* <ReportsSlider /> */}
        {/* <GoToReports />
          {/* <TabsSummary data={data}/> */}
      <BackToMain />
      <Balance />
      <CurrentPeriod /> */}
        {/* <Switch>
      <Route path={routes.homeExpenses} component={ExpensesView} />
      <Route path={routes.homeIncomes} component={IncomesView} />
      <Redirect to={routes.homeExpenses} />
    </Switch> */}
      </BalanceWrapper>
    </MainHome>
  );
};

export default HomeView;
