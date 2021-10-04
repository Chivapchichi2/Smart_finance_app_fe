import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import { Container } from './components';
import AuthView from './views/authView/authView';
import HomeView from './views/homeView/homeView';

import routes from './routes/routes';

export default function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path={routes.authPage} component={AuthView} />
        <Route path={routes.homePage} component={HomeView} />
        {/* <Route path={routes.reportPage} component={ReportView} /> */}
      </Switch>
    </Container>
  );
}
