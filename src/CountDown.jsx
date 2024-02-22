import { useRef, useState } from "react";
import "./CountDown.css"
const CountDown = () => {
  const [hours, setHours] = useState(parseInt(0));
  const [minutes, setMinutes] = useState(parseInt(0));
  const [seconds, setSeconds] = useState(parseInt(0));


  let timer=useRef();

  const handleResetTimer=()=>{
    clearInterval(timer.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  const handleTimer = () => {
    let totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    timer.current = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timer.current);
      } else {
        totalSeconds = totalSeconds - 1;
        setHours(Math.floor(totalSeconds / 3600));
        setMinutes(Math.floor((totalSeconds % 3600) / 60));
        setSeconds(totalSeconds % 60);
      }
    }, 1000);
  };

  return (
    <div className="countdown">
      <div className="timer">
        <div className="hours">
          <label>Hours</label>
          <input
            className="hours__input"
            value={hours}
            onChange={(e) => {
              setHours(e.target.value);
            }}
          />
        </div>
        <div className="minutes">
          <label>Minutes</label>
          <input
            className="minutes__input"
            value={minutes}
            onChange={(e) => {
              setMinutes(e.target.value);
            }}
          />
        </div>
        <div className="seconds">
          <label>Seconds</label>
          <input
            className="seconds__input"
            value={seconds}
            onChange={(e) => {
              setSeconds(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleTimer}>Start Timer</button>
        <button onClick={handleResetTimer}>Reset Timer</button>
      </div>
    </div>
  );
};

export default CountDown;
