import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';
import './Clock.css';

const AnalogClock = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState(moment().tz(timezone));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().tz(timezone));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  const hours = currentTime.hours();
  const minutes = currentTime.minutes();
  const seconds = currentTime.seconds();

  const secondStyle = {
    transform: `rotate(${(seconds / 60) * 360}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${(minutes / 60) * 360}deg)`,
  };

  const hourStyle = {
    transform: `rotate(${(hours % 12 + minutes / 60) * 30}deg)`,
  };

  return (
    <div className="analog-clock-container">
      <div className="analog-clock">
        <div className="analog-hand analog-hour-hand" style={hourStyle}></div>
        <div className="analog-hand analog-minute-hand" style={minuteStyle}></div>
        <div className="analog-hand analog-second-hand" style={secondStyle}></div>
      </div>
    </div>
  );
};


const DigitalClock = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState(moment().tz(timezone));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().tz(timezone));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  const hours = currentTime.hours();
  const minutes = currentTime.minutes();
  const seconds = currentTime.seconds();

  const hourStyle = {
    animationDelay: `-${(hours % 12) * 3600 + minutes * 60 + seconds}s`,
  };

  const minuteStyle = {
    animationDelay: `-${minutes * 60 + seconds}s`,
  };

  const secondStyle = {
    animationDelay: `-${seconds}s`,
  };

  return (
    <div className="digital-clock-container">
      <div className="digital-clock">
        <div className="page" style={hourStyle}>
          <div className="page-turn">{hours.toString().padStart(2, '0')}</div>
          <div className="page-flip">{hours.toString().padStart(2, '0')}</div>
        </div>
        <div className="page" style={minuteStyle}>
          <div className="page-turn">{minutes.toString().padStart(2, '0')}</div>
          <div className="page-flip">{minutes.toString().padStart(2, '0')}</div>
        </div>
        <div className="page" style={secondStyle}>
          <div className="page-turn">{seconds.toString().padStart(2, '0')}</div>
          <div className="page-flip">{seconds.toString().padStart(2, '0')}</div>
        </div>
      </div>
    </div>
  );
};

export { AnalogClock, DigitalClock };