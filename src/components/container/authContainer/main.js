import PropTypes from 'prop-types';
import s from './main.module.css';

const Main = ({ children }) => (
  <div className={s.mainContainer}>{children}</div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
