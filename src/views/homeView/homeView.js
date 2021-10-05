import MainHome from '../../components/container/homeContainer/mainHome';
import BoxHome from '../../components/container/homeContainer/boxHome';
import HomeNav from '../../components/container/homeContainer/homeNav';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
import GoToReports from '../../components/balanceWrapper/goToReports';
import BackToMain from '../../components/balanceWrapper/backToMain';
import Balance from '../../components/balanceWrapper/balance';
import CurrentPeriod from '../../components/balanceWrapper/currentPeriod';

const HomeView = () => (
  <MainHome>
    <BoxHome />
    <BalanceWrapper>
      <GoToReports />
      <BackToMain />
      <Balance />
      <CurrentPeriod />
    </BalanceWrapper>
    <HomeNav />
  </MainHome>
);

export default HomeView;
