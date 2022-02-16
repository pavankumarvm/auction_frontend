import * as React from "react";

type TimerProps = {
  id: string;
  time: Date;
};
const Timer: React.FC<TimerProps> = (props) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 1,
  });
  const deadline = props.time.getTime();

  const calculateTimeLeft = () => {
    var now = new Date().getTime();
    var t = deadline - now;
    if (t > 0) {
      return {
        days: Math.floor(t / (1000 * 60 * 60 * 24)),
        hours: Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((t % (1000 * 60)) / 1000),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  React.useEffect(() => {
    // console.log("Calculating...");
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft()!);
    }, 1000);
    if (
      timeLeft.seconds === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.days === 0
    )
      return clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <span className="timer" id={props.id}>
      {timeLeft.days > 0 ? (
        <span className="time-block">
          {timeLeft.days}
          <span className="time-measure"> Days </span>
        </span>
      ) : null}
      <span className="time-block">
        {timeLeft.hours}
        <span className="time-measure"> Hrs </span>
      </span>
      <span className="time-block">
        {timeLeft.minutes}
        <span className="time-measure"> Min </span>
      </span>
      <span className="time-block">
        {timeLeft.seconds}
        <span className="time-measure"> Sec </span>
      </span>
    </span>
  );
};

export default Timer;
