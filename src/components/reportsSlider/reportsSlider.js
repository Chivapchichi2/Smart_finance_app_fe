/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonArrow from '../buttonArrow';
import { ReactComponent as ArrowLeft } from '../../svg/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../svg/arrowRight.svg';
import { ledgerActions, ledgerSelectors } from '../../redux/ledger';
import reportSliderLogic from './logic';
import icons from './icons';

import s from './reportsSlider.module.css';
import sprite from '../../svg/expensesSlider/sprite.svg';

const reportsSlider = () => {
  const [value, setValue] = useState(false);
  const [name, setName] = useState('Расходы');
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const ref = useRef();

  const incomesByMonthData = useSelector(ledgerSelectors.incomesByMonthData);
  const expensesByMonthData = useSelector(ledgerSelectors.expenseByMonthData);

  console.log('incomesByMonthData', incomesByMonthData);
  console.log('expensesByMonthData', expensesByMonthData);

  console.log('categoryArray', category);

  useEffect(() => {
    if (value) {
      setName('Доходы');
      setCategory(reportSliderLogic(incomesByMonthData));
    } else {
      setName('Расходы');
      setCategory(reportSliderLogic(expensesByMonthData));
    }
  }, [value]);

  useEffect(() => {
    dispatch(ledgerActions.setReportSliderValue(name));
  }, [name]);

  const handleClick = () => setValue(!value);

  const categoryHandler = prop => e => {
    ref.current = e.target;

    if (e.target.nodeName !== 'DIV') {
      return;
    }
    [...e.target.closest('ul').children].map(elem =>
      elem.childNodes[1].classList.remove(`${s.active}`),
    );

    e.target.classList.add(`${s.active}`);
    if (name === 'Расходы') {
      const arr = expensesByMonthData
        .filter(expense => expense.category === prop)
        .sort((a, b) => b.value - a.value)
        .slice(0, 10);
      dispatch(ledgerActions.setExpenseChartValue(arr));
    } else {
      const arr = incomesByMonthData
        .filter(income => income.category === prop)
        .sort((a, b) => b.value - a.value)
        .slice(0, 10);
      dispatch(ledgerActions.setIncomeChartValue(arr));
    }
  };

  console.log('REF', ref.current);

  useEffect(() => () => ref.current.classList.remove(`${s.active}`), []);

  return (
    <div className={s.container}>
      <div className={s.button}>
        <ButtonArrow onClick={handleClick}>
          <ArrowLeft />
        </ButtonArrow>
        <h3 className={s.title}>{name}</h3>
        <ButtonArrow onClick={handleClick}>
          <ArrowRight />
        </ButtonArrow>
      </div>
      <ul className={s.list}>
        {category.map(elem => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li className={s.item} onClick={categoryHandler(elem.category)}>
            <p className={s.value}>{elem.summary}</p>
            <div className={s.svgBox} ref={ref}>
              <svg width="58" height="58">
                <use xlinkHref={`${sprite}#${icons[elem.category]}`} />
              </svg>
            </div>
            <h3 className={s.text}>{elem.category}</h3>
          </li>
        ))}
        {/* <li className={s.item}>
          <p className={s.value}>3000.00</p>
          <div className={s.svgBox}>
            <svg width="58" height="58">
              <use xlinkHref={`${sprite}#icon-food`} />
            </svg>
          </div>
          <h3 className={s.text}>Продукты</h3>
        </li> */}
      </ul>
      <div />
    </div>
  );
};

export default reportsSlider;
