import React from 'react';

const DateTimeClock = ({ currentTime }) => {
  return <div>{currentTime.format('YYYY-MM-DD HH:mm:ss')}</div>;
};

export default DateTimeClock;

