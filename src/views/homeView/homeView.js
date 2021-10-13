import { Suspense, lazy } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Preloader from '../../components/loader';

import authSelectors from '../../redux/auth/auth-selectors';

import routes from '../../routes/routes';

import { MainHome, BoxHome } from '../../components';
import Modal from '../../components/modal';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
import HomeNav from '../../components/container/homeContainer/homeNav';
import DatePicker from '../../components/tabs/tabsForm/input/datePicker';
import MobileTable from '../../components/tabs/mobileTable';

const CustomTabs = lazy(() =>
  import(
    '../../components/tabs/tabs' /* webpackChunkName: "reportView-page" */
  ),
);

const ReportView = lazy(() =>
  import('../reportView/reportView' /* webpackChunkName: "reportView-page" */),
);

const MobileExpensesView = lazy(() =>
  import(
    './expensesView/expensesView' /* webpackChunkName: "ExpensesView-page" */
  ),
);

const MobileIncomesView = lazy(() =>
  import(
    './incomesView/incomesView' /* webpackChunkName: "ExpensesView-page" */
  ),
);

const HomeView = () => {
  const isAuth = useSelector(authSelectors.getModal);

  console.log('isAuth', isAuth);

  const width = useWindowWidth();
  const location = useLocation();

  return (
    <MainHome>
      <BoxHome />

      {location.pathname === routes.reportIncomes ||
      location.pathname === routes.reportExpenses ? null : (
        <BalanceWrapper />
      )}

      {location.pathname === routes.homePage && width <= 767 ? (
        <>
          <DatePicker />
          <MobileTable />
          <HomeNav />
        </>
      ) : null}

      <Suspense fallback={<Preloader />}>
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
      </Suspense>
      {isAuth && <Modal text="Вы действительно хотите выйти?" />}
    </MainHome>
  );
};

export default HomeView;
