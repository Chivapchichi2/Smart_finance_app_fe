import { NavLink } from 'react-router-dom';
import routes from '../../../routes/routes';
import s from './homeNav.module.css';

const HomeNav = () => {
  <div className={s.homeNav}>
    <NavLink
      exact
      to={routes.reportExpenses}
      className={s.buttonNav}
      activeClassName={s.buttonNavActive}
      type="button"
    >
      Расход
    </NavLink>
    <NavLink
      exact
      to={routes.reportIncomes}
      className={s.buttonNav}
      activeClassName={s.buttonNavActive}
      type="button"
    >
      Доход
    </NavLink>
  </div>;
};

export default HomeNav;
