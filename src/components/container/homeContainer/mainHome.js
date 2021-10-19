import { useWindowWidth } from '@react-hook/window-size';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../../routes/routes';
import s from './mainHome.module.css';

const MainHome = ({ children }) => {
  const location = useLocation();
  const width = useWindowWidth();

  const containerHeight =
    location.pathname === routes.homePage && width > 767 && width < 1280
      ? `${s.mainContainer} ${s.fixedHeight}`
      : `${s.mainContainer}`;

  return <div className={containerHeight}>{children}</div>;
};

MainHome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainHome;
