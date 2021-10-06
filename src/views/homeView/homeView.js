import MainHome from '../../components/container/homeContainer/mainHome';
import BoxHome from '../../components/container/homeContainer/boxHome';
import BalanceWrapper from '../../components/balanceWrapper/balanceWrapper';
import TabsSummary from '../../components/tabs/tabsSummary';

// import HomeNav from '../../components/container/homeContainer/homeNav';

// import Notification from '../../components/notification';

const HomeView = () => (
  <MainHome>
    <BoxHome />
    <BalanceWrapper />
    {/* <HomeNav /> */}
    {/* <TabsSummary data={data}/> */}
    {/* Окошко нотификации  */}
    {/* <Notification /> */}
  </MainHome>
);

export default HomeView;
