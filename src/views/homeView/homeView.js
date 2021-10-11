import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { useLocation, Route, Switch, Redirect } from 'react-router-dom';

import routes from '../../routes/routes';

import { MainHome, BoxHome, CustomTabs } from '../../components';
import Modal from '../../components/modal';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
import HomeNav from '../../components/container/homeContainer/homeNav';
import ReportView from '../reportView';

const HomeView = () => {
  const [showModal, setShowModal] = useState(false);
  const width = useWindowWidth();
  const location = useLocation();

  return (
    <MainHome>
      <BoxHome />

      {showModal && <Modal text="Вы действительно хотите выйти?" />}
      <BalanceWrapper />

      {location.pathname === routes.homePage && width <= 767 ? (
        <HomeNav />
      ) : null}

      {/* {width <= 767 && <HomeNav />} */}

      <Switch>
        <Route
          exact
          path={routes.homePage}
          component={width > 767 && CustomTabs}
        />
        <Route exact path={routes.reportPage} component={ReportView} />
        <Redirect to={routes.homePage} />
      </Switch>
      {/* {} */}
    </MainHome>
  );
};

export default HomeView;
