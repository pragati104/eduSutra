"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
var today = new Date();

// Increment the date by 1 day
today.setDate(today.getDate() + 1);

// Extract day, month, and year
var day = today.getDate();
var month = today.getMonth() + 1; // Months are zero-indexed, so add 1
var year = today.getFullYear();

// Pad day and month with leading zeros if necessary
day = day < 10 ? "0" + day : day;
month = month < 10 ? "0" + month : month;

const COUNTDOWN_FROM = month + "/" + day + "/" + year;

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const intervalRef = useRef(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="p-0.5 bg-gradient-to-br from-violet-600 to-indigo-600 w-full rounded-lg">
      <div className="w-full mx-auto flex items-center bg-white rounded-lg">
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hrs" />
        <CountdownItem num={remaining.minutes} text="mins" />
        <CountdownItem num={remaining.seconds} text="secs" />
      </div>
    </div>
  );
};

const CountdownItem = ({ num, text }) => {
  return (
    <div className="font-mono w-1/4 flex flex-col gap-1 items-center justify-center border-r-[1px] border-slate-200 rounded-lg">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block md:text-2xl text-base    text-black font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className=" md:text-base text-xs font-light text-slate-500">{text}</span>
    </div>
  );
};

export default ShiftingCountdown;
