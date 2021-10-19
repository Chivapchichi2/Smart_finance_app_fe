import { Suspense, lazy } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import {
  useLocation,
  Route,
  Switch,
  Redirect,
  useHistory,
  NavLink,
} from 'react-router-dom';
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

const OurTeamView = lazy(() =>
  import('../teamView/teamView' /* webpackChunkName: "OurTeamView-page" */),
);

const HomeView = () => {
  const isAuth = useSelector(authSelectors.getModal);
  const width = useWindowWidth();
  const location = useLocation();

  return (
    <MainHome>
      <BoxHome />
      {location.pathname === routes.reportIncomes ||
      location.pathname === routes.reportExpenses ||
      location.pathname === routes.ourTeam ? null : (
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
          {width <= 767 && (
            <Route
              path={routes.reportExpenses}
              component={MobileExpensesView}
            />
          )}

          {width <= 767 && (
            <Route path={routes.reportIncomes} component={MobileIncomesView} />
          )}

          <Route path={routes.ourTeam} component={OurTeamView} />

          <Redirect to={routes.homePage} />
        </Switch>
      </Suspense>
      {isAuth && <Modal text="Вы действительно хотите выйти?" />}
      {location.pathname === routes.ourTeam || width < 1280 ? null : (
        <NavLink
          exact
          to={routes.ourTeam}
          className="buttonTeam"
          activeClassName="buttonTeamActive"
          type="button"
        >
          &#9824; &#9827; Developer Team &#9829; &#9830;
        </NavLink>
      )}
    </MainHome>
  );
};

export default HomeView;
