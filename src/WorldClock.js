import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment-timezone';
import DateTimeClock from './DateTimeClock';
// import Clock from './Clock';
import { AnalogClock, DigitalClock } from './Clock';


const WorldClock = ({ timeZones }) => {
  const [currentTime, setCurrentTime] = useState(moment()); // Use moment() to get the current local time

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment()); // Update currentTime with the current local time
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeData = timeZones.map((timezone) => {
    const localTime = moment(currentTime).tz(timezone);
    return { timezone, localTime };
  });

  return (
    <div>
      {timeData.map(({ timezone, localTime }) => (
        <div key={timezone}>
          <h2>{timezone}</h2>
          <DateTimeClock currentTime={localTime} />
          <AnalogClock key={timezone} timezone={timezone} />
          <DigitalClock key={timezone} timezone={timezone} />
        </div>
      ))}
    </div>
  );
};

export default WorldClock;

