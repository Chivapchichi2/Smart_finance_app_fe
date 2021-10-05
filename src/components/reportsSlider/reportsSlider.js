import s from './reportsSlider.module.css';
import ButtonArrow from '../buttonArrow';
import { ReactComponent as ArrowLeft } from '../../svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../svg/arrowRight.svg';
import sprite from '../../svg/expensesSlider/sprite.svg';

const reportsSlider = () => (
  <div className={s.container}>
    <div className={s.button}>
      <ButtonArrow>
        <ArrowLeft />
      </ButtonArrow>
      <h3 className={s.title}>Расходы</h3>
      <ButtonArrow>
        <ArrowRight />
      </ButtonArrow>
    </div>
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.value}>3000.00</p>
        <div className={s.svgBox}>
          <svg width="58" height="58">
            <use xlinkHref={`${sprite}#icon-food`} />
          </svg>
        </div>
        <h3 className={s.text}>Продукты</h3>
      </li>
      <li className={s.item}>
        <p className={s.value}>1200.00</p>
        <div className={s.svgBox}>
          <svg width="58" height="58">
            <use xlinkHref={`${sprite}#icon-cocktail`} />
          </svg>
        </div>
        <h3 className={s.text}>Алкоголь</h3>
      </li>
      <li className={s.item}>
        <p className={s.value}>800.00</p>
        <div className={s.svgBox}>
          <svg width="58" height="58">
            <use xlinkHref={`${sprite}#icon-kite`} />
          </svg>
        </div>
        <h3 className={s.text}>Развлечение</h3>
      </li>
      <li className={s.item}>
        <p className={s.value}>650.00</p>
        <div className={s.svgBox}>
          <svg width="58" height="58">
            <use xlinkHref={`${sprite}#icon-health`} />
          </svg>
        </div>
        <h3 className={s.text}>Здоровье</h3>
      </li>
      <li className={s.item}>
        <p className={s.value}>450.00</p>
        <div className={s.svgBox}>
          <svg width="58" height="58">
            <use xlinkHref={`${sprite}#icon-car`} />
          </svg>
        </div>
        <h3 className={s.text}>Транспорт</h3>
      </li>
      <li className={s.item}>
        <p className={s.value}>960.00</p>
        <div className={s.svgBox}>
          <svg width="58" height="58">
            <use xlinkHref={`${sprite}#icon-couch`} />
          </svg>
        </div>
        <h3 className={s.text}>все для дома</h3>
      </li>
    </ul>
    <div />
  </div>
);

export default reportsSlider;
