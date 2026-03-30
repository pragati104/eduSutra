"use client"
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
const ValuePiece = null;  
const Value = [ValuePiece, ValuePiece]; 

function Calendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='md:w-[30%] w-[90%] rounded-lg'>
      <DatePicker monthPlaceholder="mm" dayPlaceholder="dd" yearPlaceholder='yyyy' onChange={onChange} value={value} className="w-full h-9" />
    </div>
  );
}

export default Calendar;
