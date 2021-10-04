// import { Route, Switch, Redirect } from 'react-router-dom';

import { MainHome, BoxHome } from '../../components';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
// import routes from '../../routes/routes';

// import HomeNav from '../../components/container/homeContainer/homeNav';

import Notification from '../../components/notification';

const HomeView = () => (
  <MainHome>
    <BoxHome />
    <BalanceWrapper />
    {/* <HomeNav /> */}

    {/* Окошко нотификации  */}
    {/* <Notification /> */}
    {/* <Switch>
      <Route path={routes.homeExpenses} component={ExpensesView} />
      <Route path={routes.homeIncomes} component={IncomesView} />
      <Redirect to={routes.homeExpenses} />
    </Switch> */}
  </MainHome>
);

export default HomeView;
