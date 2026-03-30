import searching from "@/Data/searching.json";
import {
  addWeeks,
  endOfWeek,
  format,
  isWithinInterval,
  startOfWeek,
  subWeeks,
} from "date-fns";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Arrow from "../common/Arrow";
import UpComingSlider from "./UpcomingSlider";

const UpcomingClass = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentYear = currentMonth.getFullYear();

  const TodayData = [
    {
      topic: "P block Elements Lec - 7",
      subject: "P block Elements",
      batch: "Lec - 7",
      starttime: "5:00 PM",
      teacher: "Subham Kumar",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link1",
    },
    {
      topic: "Modern Physics Elements Lec - 7",
      subject: "Modern Physics",
      batch: "Lec - 7",
      starttime: "3:00 PM",
      teacher: "Prem bhai",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link2",
    },
    {
      topic: "Trigonometry Lec - 7",
      subject: "Trigonometry",
      batch: "Lec - 7",
      starttime: "4:00 PM",
      teacher: "Pragati",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link3",
    },
    {
      topic: "P block Elements Lec - 7",
      subject: "P block Elements",
      batch: "Lec - 7",
      starttime: "5:00 PM",
      teacher: "Subham Kumar",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link1",
    },
    {
      topic: "Modern Physics Elements Lec - 7",
      subject: "Modern Physics",
      batch: "Lec - 7",
      starttime: "3:00 PM",
      teacher: "Prem bhai",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link2",
    },
    {
      topic: "Trigonometry Lec - 7",
      subject: "Trigonometry",
      batch: "Lec - 7",
      starttime: "4:00 PM",
      teacher: "Pragati",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link3",
    },
    {
      topic: "P block Elements Lec - 7",
      subject: "P block Elements",
      batch: "Lec - 7",
      starttime: "5:00 PM",
      teacher: "Subham Kumar",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link1",
    },
    {
      topic: "Modern Physics Elements Lec - 7",
      subject: "Modern Physics",
      batch: "Lec - 7",
      starttime: "3:00 PM",
      teacher: "Prem bhai",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link2",
    },
    {
      topic: "Trigonometry Lec - 7",
      subject: "Trigonometry",
      batch: "Lec - 7",
      starttime: "4:00 PM",
      teacher: "Pragati",
      date: "2024-04-23", // Assuming date format YYYY-MM-DD
      type: "Prime",
      joinlink: "https://example.com/link3",
    },
  ];

  const data = {
    mon: [
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
    ],
    tue: [
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
    ],
    wed: [
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
    ],
    thu: [
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
    ],
    fri: [
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
    ],
    sat: [
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
    ],
    sun: [
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
      {
        topic: "P block Elements Lec - 7",
        subject: "P block Elements",
        batch: "Lec - 7",
        starttime: "5:00 PM",
        teacher: "Subham Kumar",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link1",
      },
      {
        topic: "Modern Physics Elements Lec - 7",
        subject: "Modern Physics",
        batch: "Lec - 7",
        starttime: "3:00 PM",
        teacher: "Prem bhai",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link2",
      },
      {
        topic: "Trigonometry Lec - 7",
        subject: "Trigonometry",
        batch: "Lec - 7",
        starttime: "4:00 PM",
        teacher: "Pragati",
        date: "2024-04-23", // Assuming date format YYYY-MM-DD
        type: "Prime",
        joinlink: "https://example.com/link3",
      },
    ],
  };

  const monthNames = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const WeekRange = () => {
    const dateFormat = "d MMM";
    const weekStartDate = format(
      startOfWeek(currentMonth, { weekStartsOn: 1 }),
      dateFormat
    );
    const weekEndDate = format(
      endOfWeek(currentMonth, { weekStartsOn: 1 }),
      dateFormat
    );
    const weekRange = `${weekStartDate} - ${weekEndDate}`;

    return weekRange;
  };

  useEffect(() => {
    const header = WeekRange({ currentMonth });
    const formattedWeekRange = formatWeekRangeToQuery(header, currentYear);
  }, [currentMonth]);

  function formatWeekRangeToQuery(input, year) {
    const [start, end] = input.split(" - ");

    const parseDate = (dateStr) => {
      const [day, month] = dateStr.split(" ");
      const monthNumber = monthNames[month];
      return `${year}-${monthNumber}-${day.padStart(2, "0")}`;
    };

    const startDate = parseDate(start);
    const endDate = parseDate(end);

    return `startDate=${startDate}&endDate=${endDate}`;
  }

  const tabs = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [checked, setChecked] = useState(0);

  const changeWeekHandle = (btnType) => {
    const currentDate = new Date();
    let newDate;

    if (btnType === "prev") {
      newDate = subWeeks(currentMonth, 1);
    } else if (btnType === "next") {
      newDate = addWeeks(currentMonth, 1);
    } else {
      return;
    }

    const startOfTheWeek = startOfWeek(newDate, { weekStartsOn: 1 });
    const endOfTheWeek = endOfWeek(newDate, { weekStartsOn: 1 });

    const isCurrentDateInWeek = isWithinInterval(currentDate, {
      start: startOfTheWeek,
      end: endOfTheWeek,
    });

    if (isCurrentDateInWeek) {
      setCurrentMonth(currentDate);
    } else {
      setCurrentMonth(startOfTheWeek);
    }
  };
  return (
    <div className="my-4 md:w-full w-[90%] mx-auto">
      <div className="flex items-center justify-between gap-2 md:mx-4">
        <div className="bg-primaryLight p-2  py-3.5 rounded-lg text-white  h-fit flex  gap-2">
          <Arrow type={"back"} click={() => changeWeekHandle("prev")} />
          {WeekRange()}
          <Arrow type={"forward"} click={() => changeWeekHandle("next")} />
        </div>
        <div className="md:w-fit w-[90%] md:mx-0 mx-auto flex justify-end rounded-xl md:my-4 mb-2 overflow-auto no-scrollbar">
          <div className="radio-inputs relative flex justify-end rounded-lg bg-primaryLight text-white box-border text-sm p-4 pb-0 w-fit">
            {tabs.map((day, index) => (
              <label
                onClick={() => setChecked(index)}
                key={index}
                className={`radio ${
                  index !== 0 && index !== checked && index !== checked + 1
                    ? "border-l"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="radio"
                  checked={day === tabs[checked]}
                  className="hidden"
                />
                <span
                  className={`name flex cursor-pointer items-center justify-center border-none py-2 px-4 relative transition-all duration-300 ease-in-out rounded-tl-lg rounded-tr-lg ${
                    index === checked
                      ? "text-primaryLight hover:text-primaryDark font-bold bg-white"
                      : "hover:text-yellow-300"
                  }`}
                >
                  {day}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {TodayData.length > 0 ? (
        <UpComingSlider data={TodayData} number={checked} />
      ) : (
        <div className=" flex flex-col justify-center items-center py-2">
          <div className="text-3xl text-red-600 font-bold my-2">
            No Class Today
          </div>
          <Lottie animationData={searching} className="w-[30%]" />
        </div>
      )}
    </div>
  );
};

export default UpcomingClass;
