import React, { useState, useEffect } from 'react';
import WorldClock from './WorldClock';
import moment from 'moment';
import 'moment-timezone';
// import Clock from './Clock';


const App = () => {
  const timeZones = ['America/New_York', 'Europe/London', 'Asia/Tokyo']; // Example time zones, you can add more as needed.
  const [currentTime, setCurrentTime] = useState(moment()); // Use moment() to get the current local time

//  useEffect(() => {
//    const intervalId = setInterval(() => {
//console.log('app.useEffect');
//     console.log(moment());
//      setCurrentTime(moment()); // Update currentTime with the current local time
//    }, 1000);
//
//    return () => clearInterval(intervalId);
//  }, []);

  return (
    <div>
      <h1>World Clock</h1>
      <WorldClock timeZones={timeZones} currentTime={currentTime} />
    </div>
  );
};

export default App;

