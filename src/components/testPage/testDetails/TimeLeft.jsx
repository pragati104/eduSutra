import { useTimer } from "react-timer-hook";

function TimeLeft({ expiryTimestamp }) {
  const { totalSeconds, seconds, minutes, hours, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };

  return (
    <div>
      <div className="flex gap-2 bg-fuchsia-800 w-fit text-white rounded-md shadow-md py-0.5 lg:px-4 px-2 pl-1 ">
        Time Left:<span>{formatTime(hours)}</span>:
        <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
    </div>
  );
}

export default TimeLeft;
