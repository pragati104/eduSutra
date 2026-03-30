import Lottie from "lottie-react";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import wait from "../../../public/Animation/wait.json";
import MyTimer from "./Timer";

const WaitingRoomComp = ({ data, loader, text }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [sessionExpire, setSessionExpire] = useState(false);
  // const searchParams = useSearchParams();
  // const id = searchParams.get("waiting-room");
  // const eventType = searchParams.get("eventType");
  const [timer, setTimer] = useState(false);
  const [classStatus, setClassStatus] = useState(null);
  const [loader2, setLoader2] = useState(false);
  let EndTime = new Date(data[0]?.start_date);

  useEffect(() => {
    let intervalId;
    const checkTime = () => {
      const currentTime = new Date();
      const givenTime = new Date(data[0]?.start_date);
      const endDateTime = new Date(data[0]?.end_date);

      if (
        data[0]?.start_date &&
        currentTime.getTime() >= givenTime.getTime() &&
        currentTime.getTime() <= endDateTime.getTime()
      ) {
        setIsEnabled(true);
        clearInterval(intervalId);
      } else {
        setIsEnabled(false);
      }

      if (currentTime.getTime() >= endDateTime.getTime()) {
        clearInterval(intervalId);
        setSessionExpire(true);
        // console.log('your session has expire')
      }

      if (data[0]?.start_date && currentTime.getTime() < givenTime.getTime()) {
        setTimer(true);
      } else {
        setTimer(false);
      }
    };

    intervalId = setInterval(checkTime, 1000);

    return () => clearInterval(intervalId);
  }, [data]);

  // useEffect(() => {
  //   const checkClassStatus = () => {
  //     fetchData(
  //       `/api/get-join-zoom-meeting?event_type=${eventType}&event_id=${id}`,
  //       setClassStatus,
  //       setLoader2
  //     );
  //   };
  //   checkClassStatus();
  //   const intervalId = setInterval(checkClassStatus, 30000);
  //   return () => clearInterval(intervalId);
  // }, [eventType, id]);

  return (
    <main className="flex flex-col items-center">
      <p className="md:text-lg text-base text-center mb-4 mx-2 font-semibold">
        {text}
      </p>
      {loader ? (
        <div className=" w-9 h-9 border-4 border-t-gray-500 rounded-full animate-spin"></div>
      ) : (
        <>
          {/* {data?.map((item, index) => ( */}
          <div className="w-full">
            <div className="w-full flex flex-col items-center justify-start gap-2  text-gray-600  ">
              <p className="md:text-lg text-base capitalize font-bold">
                {"P-block live class"}
              </p>
              <p className="md:text-base text-sm capitalize">
                {"P-block live class lecture 6"}
              </p>
              <div className="flex items-center justify-start gap-1 md:text-base text-sm">
                {/* <div>
                  <p>{getDate(item.start_date)},</p>
                </div>
                <div>
                  <p>{getTime(item.start_date)}</p>
                </div>{" "}
                -{" "}
                <div>
                  <p>{getTime(item.end_date)}</p>
                </div> */}
              </div>
            </div>
            <div className="flex justify-center items-center rounded-lg px-2 py-1 text-white text-lg font-semibold cursor-pointer">
              {sessionExpire && (
                <div className=" text-gray-700 text-2xl">
                  Your Session Has Expired
                </div>
              )}
              {isEnabled && classStatus?.redirect_to_live ? (
                <Link
                  href={`/live-class/${item.id}?eventType=${item.event_type}`}
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Join Class
                </Link>
              ) : (
                <div className="flex flex-col">
                  {/* <Lottie
                    animationData={wait}
                    loop={true}
                    className="md:w-[80%] w-[50%] mx-auto"
                  /> */}
                  <p className="md:text-xl text-base text-gray-700">
                    Your live class will start soon
                  </p>
                </div>
              )}
            </div>
            {timer && (
              <div className="w-full text-black flex flex-col items-center justify-center gap-2 mt-2">
                <MyTimer expiryTimestamp={EndTime} />
              </div>
            )}
          </div>
          {/* ))} */}
        </>
      )}
    </main>
  );
};

export default WaitingRoomComp;
