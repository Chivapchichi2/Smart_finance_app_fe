import PropTypes from 'prop-types';
import s from './mainHome.module.css';

const MainHome = ({ children }) => (
  <div className={s.mainContainer}>{children}</div>
);

MainHome.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainHome;
