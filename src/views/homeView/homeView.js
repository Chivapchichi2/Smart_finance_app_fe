import MainHome from '../../components/container/homeContainer/mainHome';
import BoxHome from '../../components/container/homeContainer/boxHome';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
import GoToReports from '../../components/balanceWrapper/goToReports';
import BackToMain from '../../components/balanceWrapper/backToMain';
import Balance from '../../components/balanceWrapper/balance';
import CurrentPeriod from '../../components/balanceWrapper/currentPeriod';

// import HomeNav from '../../components/container/homeContainer/homeNav';

// import Notification from '../../components/notification';

const HomeView = () => (
  <MainHome>
    <BoxHome />
    <BalanceWrapper>
      {/* <HomeNav /> */}
      {/* Окошко нотификации  */}
      {/* <Notification /> */}
      <GoToReports />
      <BackToMain />
      <Balance />
      <CurrentPeriod />
    </BalanceWrapper>
  </MainHome>
);

export default HomeView;
