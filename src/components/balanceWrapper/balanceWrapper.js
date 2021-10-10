import Balance from './balance';
import GoToReports from './goToReports';
import routes from '../../routes/routes';
import CurrentPeriod from './currentPeriod';

import s from './balanceWrapper.module.css';

const balanceWrapper = () => (
  <div className={s.container}>
    {routes.reportPage === '/home/report' ? <CurrentPeriod /> : <GoToReports />}
    <Balance />
  </div>
);

export default balanceWrapper;
