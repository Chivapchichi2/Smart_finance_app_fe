import MainHome from '../../components/container/homeContainer/mainHome';
import BoxHome from '../../components/container/homeContainer/boxHome';
import HomeNav from '../../components/container/homeContainer/homeNav';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';

const HomeView = () => (
  <MainHome>
    <BoxHome />
    <BalanceWrapper />
    <HomeNav />
  </MainHome>
);

export default HomeView;
