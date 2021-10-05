import s from './balanceWrapper.module.css';

const balanceWrapper = ({ children }) => (
  <div className={s.container}>{children}</div>
);

export default balanceWrapper;
