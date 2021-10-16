import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import { useLocation } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import routes from '../../../../../routes/routes';
import ledgerActions from '../../../../../redux/ledger/ledger-actions';
import { ReactComponent as CalendarIcon } from '../../../../../svg/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';
import s from './datePicker.module.css';

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const location = useLocation();
  const width = useWindowWidth();

  const normalizedDate = `${
    startDate.getMonth() + 1
  }.${startDate.getFullYear()}`;

  useEffect(() => {
    dispatch(ledgerActions.setCurrentDateValue(normalizedDate));
  }, [startDate]);

  const homeDatePicker =
    location.pathname === routes.homePage && width <= 320
      ? `${s.wrap} ${s.homeDatePicker}`
      : `${s.wrap}`;

  return (
    <div className={homeDatePicker}>
      <div className={s.icon}>
        <CalendarIcon />
      </div>
      <ReactDatePicker
        name="dataPicker"
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
        fixedHeight
        className="calendar"
      />
    </div>
  );
}

export default DatePicker;
