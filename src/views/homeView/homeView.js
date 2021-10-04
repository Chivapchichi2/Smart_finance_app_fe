import MainHome from '../../components/container/homeContainer/mainHome';
import BoxHome from '../../components/container/homeContainer/boxHome';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';

// import HomeNav from '../../components/container/homeContainer/homeNav';

// import Notification from '../../components/notification';

const HomeView = () => (
  <MainHome>
    <BoxHome />
    <BalanceWrapper />
    {/* <HomeNav /> */}

    {/* Окошко нотификации  */}
    {/* <Notification /> */}
  </MainHome>
);

export default HomeView;
