import PropTypes from 'prop-types';
import s from './container.module.css';

const Container = ({ children }) => (
  <div className={s.adaptiveContainer}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
