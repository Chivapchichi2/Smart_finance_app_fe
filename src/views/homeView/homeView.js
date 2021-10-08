import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import routes from '../../routes/routes';

// import TabsSummary from '../../components/tabs/tabsSummary';
import { MainHome, BoxHome } from '../../components';
import Modal from '../../components/modal';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
// import GoToReports from '../../components/balanceWrapper/goToReports';
// import BackToMain from '../../components/balanceWrapper/backToMain';
// import Balance from '../../components/balanceWrapper/balance';
// import CurrentPeriod from '../../components/balanceWrapper/currentPeriod';
import HomeNav from '../../components/container/homeContainer/homeNav';

// import ReportsSlider from '../../components/reportsSlider';
// import ReportByMonth from '../../components/reportByMonth';
import TabForm from '../../components/tabs/tabsForm/tabForm';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);
  const width = useWindowWidth();

  return (
    <MainHome>
      <BoxHome />
      {showModal && <Modal text="Вы действительно хотите выйти?" />}
      <BalanceWrapper />
      {width <= 767 && <HomeNav />}

      {/* <GoToReports />
          {/* <TabsSummary data={data}/> */}
      {/* <BackToMain />
        <Balance />
        <CurrentPeriod /> */}
      {/* <Switch>
      <Route path={routes.homeExpenses} component={ExpensesView} />
      <Route path={routes.homeIncomes} component={IncomesView} />
      <Redirect to={routes.homeExpenses} />
    </Switch> */}
      {/* <ReportByMonth />
    <ReportsSlider /> */}

      {/* <TabForm /> */}
    </MainHome>
  );
};

export default HomeView;
