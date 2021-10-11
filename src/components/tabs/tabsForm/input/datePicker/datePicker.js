import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useLocation } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size';
import routes from '../../../../../routes/routes';
import { ReactComponent as CalendarIcon } from '../../../../../svg/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';
import s from './datePicker.module.css';

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const location = useLocation();
  const width = useWindowWidth();

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
