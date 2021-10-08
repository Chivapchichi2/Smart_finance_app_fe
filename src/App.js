import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import { Container } from './components';
import AuthView from './views/authView/authView';
import HomeView from './views/homeView/homeView';

import routes from './routes/routes';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

export default function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <PublicRoute exact path={routes.authPage}>
          <AuthView />
        </PublicRoute>
        <PrivateRoute path="/home" redirectTo={routes.authPage}>
          <HomeView />
        </PrivateRoute>
        {/* <Route exact path={routes.authPage} component={AuthView} /> */}
        {/* <Route path={routes.homePage} component={HomeView} /> */}
        {/* <Route path={routes.reportPage} component={ReportView} /> */}
      </Switch>
    </Container>
  );
}
