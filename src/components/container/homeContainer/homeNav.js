import { NavLink, useLocation } from 'react-router-dom';
import routes from '../../../routes/routes';
import s from './homeNav.module.css';

const HomeNav = () => {
  const location = useLocation();

  // console.log(location);
  console.log(routes.reportExpenses);
  console.log(routes.reportIncomes);

  return (
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
    </div>
  );
};

export default HomeNav;
