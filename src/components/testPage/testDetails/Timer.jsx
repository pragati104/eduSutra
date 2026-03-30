import { setTimeTaken } from "@/GlobalRedux/Features/testSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStopwatch } from "react-timer-hook";
function Timer() {
  const dispatch = useDispatch();
  const { questionNo } = useSelector((store) => store.test);
  const { totalSeconds, seconds, minutes, reset } = useStopwatch({
    autoStart: true,
  });
  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };
  useEffect(() => {
    dispatch(setTimeTaken(totalSeconds));
    reset();
  }, [questionNo, reset, dispatch]);
  return (
    <div className="flex items-center  gap-0.5 text-lg w-fit">
      <div className="p-1 rounded-md shadow-md bg-white">
        <p className="md:text-sm text-xs shadow-md rounded-md p-1 bg-black text-white w-8 font-semibold items-center flex justify-center">
          {formatTime(minutes)}
        </p>
      </div>
      :
      <div className="p-1 rounded-md shadow-md bg-white">
        <p className="md:text-sm text-xs shadow-md rounded-md p-1 bg-black text-white w-8 font-semibold items-center flex justify-center">
          {formatTime(seconds)}
        </p>
      </div>
    </div>
  );
}

export default Timer;
