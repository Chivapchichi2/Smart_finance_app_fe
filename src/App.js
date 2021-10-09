import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from './redux/auth/auth-operations';

import Header from './components/header';
import { Container } from './components';
import AuthView from './views/authView/authView';
import HomeView from './views/homeView/homeView';

import routes from './routes/routes';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Switch>
        <PublicRoute
          exact
          path={routes.authPage}
          restricted
          redirectTo={routes.homePage}
        >
          <AuthView />
        </PublicRoute>
        <PrivateRoute path={routes.homePage} redirectTo={routes.authPage}>
          <HomeView />
        </PrivateRoute>

        {/* <Route path={routes.reportPage} component={ReportView} /> */}
      </Switch>
    </Container>
  );
}
