import Balance from './balance';
import GoToReports from './goToReports';

import s from './balanceWrapper.module.css';

const balanceWrapper = () => (
  <div className={s.container}>
    <GoToReports />
    <Balance />
  </div>
);

export default balanceWrapper;
