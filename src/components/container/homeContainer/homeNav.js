import s from './homeNav.module.css';

const HomeNav = () => (
  <div className={s.homeNav}>
    <button className={s.buttonNav} type="button">
      Расход
    </button>
    <button className={s.buttonNav} type="button">
      Доход
    </button>
  </div>
);

export default HomeNav;
