// import Button from './components/button/button';
import Header from './components/header';
import Container from './components/container/container';
import BoxGrey from './components/container/boxGrey';
import AuthForm from './components/auth/authForm';

import Main from './components/container/main';

export default function App() {
  return (
    <Container>
      <Header />
      <Main>
        <BoxGrey />
        <AuthForm />
      </Main>
    </Container>
  );
}
