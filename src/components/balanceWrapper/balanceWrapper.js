import { useLocation } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import Balance from './balance';
import GoToReports from './goToReports';
import routes from '../../routes/routes';
import CurrentPeriod from './currentPeriod';
import BackToMain from './backToMain';

import s from './balanceWrapper.module.css';

const balanceWrapper = () => {
  const location = useLocation();
  const width = useWindowWidth();

  // console.log(location);
  return (
    <div className={s.container}>
      {location.pathname === routes.reportPage ? (
        <>
          <CurrentPeriod />
          <BackToMain />
        </>
      ) : (
        <GoToReports />
      )}

      <Balance />
    </div>
  );
};

export default balanceWrapper;
