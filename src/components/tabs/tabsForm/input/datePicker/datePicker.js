import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { ReactComponent as CalendarIcon } from '../../../../../svg/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';
import s from './datePicker.module.css';

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={s.wrap}>
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
