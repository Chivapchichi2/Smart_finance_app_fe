// import { Route, Switch, Redirect } from 'react-router-dom';

import { MainHome, BoxHome } from '../../components';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
import GoToReports from '../../components/balanceWrapper/goToReports';
import BackToMain from '../../components/balanceWrapper/backToMain';
import Balance from '../../components/balanceWrapper/balance';
import CurrentPeriod from '../../components/balanceWrapper/currentPeriod';
import CustomTabs from '../../components/tabs/tabs';
// import routes from '../../routes/routes';
// import HomeNav from '../../components/container/homeContainer/homeNav';
// import Notification from '../../components/notification';
// import ReportsSlider from '../../components/reportsSlider';

const HomeView = () => (
  <MainHome>
    <BoxHome />
    <BalanceWrapper>
      {/* <HomeNav /> */}
      {/* Окошко нотификации  */}
      {/* <Notification /> */}
      {/* <ReportsSlider /> */}
      <GoToReports />
      <BackToMain />
      <Balance />
      <CurrentPeriod />
      {/* <Switch>
        <Route path={routes.homeExpenses} component={ExpensesView} />
        <Route path={routes.homeIncomes} component={IncomesView} />
        <Redirect to={routes.homeExpenses} />
      </Switch> */}
    </BalanceWrapper>
    <CustomTabs />
  </MainHome>
);

export default HomeView;
