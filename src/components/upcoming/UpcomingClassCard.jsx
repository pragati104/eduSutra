import Link from "next/link";
import { HiOutlineStatusOnline } from "react-icons/hi";

const UpcomingClassCard = ({ data }) => {
  const { subject, batch, starttime, teacher, date, joinlink } = data;
  //   const givenHour = date.getHours();
  //   const currentDate = new Date();
  //   const currentHour = currentDate.getHours();
  //   const givenDay = date.getDate();
  //   const currentDay = currentDate.getDate();
  //   const formattedDate = `${date.getDate()}/${
  //     date.getMonth() + 1
  //   }/${date.getFullYear()}`;
  //   const formattedTime = `${date.getHours()}:${("0" + date.getMinutes()).slice(
  //     -2
  //   )}`;

  const isLiveClass = false;
  //   const isLiveClass = givenHour === currentHour && givenDay === currentDay;
  return (
    <div className="w-full md:w-[95%] m-auto overflow-hidden rounded-3xl  border border-x-[#57c1ff] border-t-[#57c1ff] lg:border-[#a8a8a8] bg-gradient-to-r from-white to-primaryLight text-gray-600">
      <div className="w-full px-4 py-2 bg-white rounded-br-3xl">
        <div className="flex items-center justify-between my-1">
          <p>
            Live Class{" "}
            <span className="text-sm font-semibold">by {teacher}</span>
          </p>

          <div className=" flex items-center justify-center gap-1 px-2 py-[1px] bg-[#f44a59] text-white text-xs lg:text-sm rounded-md">
            {isLiveClass ? (
              <>
                <span className="relative flex items-center justify-center h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1 w-1 bg-white"></span>
                </span>
                <p>Upcoming</p>
              </>
            ) : (
              <>
                <p>Upcoming</p>
                <span>
                  <HiOutlineStatusOnline />
                </span>{" "}
              </>
            )}
          </div>
        </div>
        <p className=" text-base text-gray-700 my-2">
          {batch} <span className="text-sm font-semibold">({subject})</span>
        </p>
        {/* <div className="flex items-center justify-start gap-10 my-1 text-sm capitalize">
          <p>{teacher}</p>
        </div> */}
        {isLiveClass ? (
          <p className=" text-sm font-medium">
            Live class has been running since{" "}
            <span className="text-blue-600 font-bold">{starttime}</span>
          </p>
        ) : (
          <p className=" text-sm font-medium">
            Upcoming class will start at{" "}
            <span className="text-blue-600 font-bold">{starttime}</span>
          </p>
        )}
      </div>
      <Link
        href={"/waiting-room"}
        className="flex items-center justify-between text-white rounded-3xl bg-primaryLight text-sm px-4 py-1.5"
      >
        {/* <div className="flex items-center  justify-center gap-1 bg-primaryDark hover:bg-slate-600  border border-gray-500 text-[#ffffff]  rounded-xl text-xs px-4 h-8">
          <FaHourglassHalf
            size={20}
            color="#ffffff"
            className="font-semibold"
          />

          <p className="  text-sm font-semibold">Start soon</p>
        </div> */}
        <div className=" flex flex-col">
          <span className="text-sm">{date}</span>
        </div>
      </Link>
    </div>
  );
};

export default UpcomingClassCard;
