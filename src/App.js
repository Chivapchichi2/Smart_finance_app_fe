import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from './components/loader';
import authOperations from './redux/auth/auth-operations';
import Header from './components/header';
import { Container } from './components';
import routes from './routes/routes';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const AuthView = lazy(() =>
  import('./views/authView/authView' /* webpackChunkName: "auth-page" */),
);

const HomeView = lazy(() =>
  import('./views/homeView/homeView' /* webpackChunkName: "home-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Suspense fallback={<Preloader />}>
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
        </Switch>
      </Suspense>
      <ToastContainer autoClose={4900} position="top-center" />
    </Container>
  );
}
