"use client";
import WaitingRoomComp from "@/components/waiting-room";
// import { useSearchParams } from "next/navigation";
import { useState } from "react";

const WaitingRoom = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  // const searchParams = useSearchParams();
  // const id = searchParams.get("waiting-room");
  // const eventType = searchParams.get("eventType");

  // const joiningShedule = async (id, event_type) => {
  //   try {
  //     const getEventData = await fetchData(
  //       `/api/get-event-data?event_type=${event_type}&event_id=${id}`,
  //       null,
  //       setLoader
  //     );
  //     if (getEventData.success && getEventData.result) {
  //       setData(getEventData.result);
  //     }
  //   } catch (error) {
  //     // console.log(error)
  //   }
  // };

  // useEffect(() => {
  //   joiningShedule(id, eventType);
  // }, [id, eventType]);
  return (
    <div className="pt-9 pb-4 bg-white flex flex-col justify-center items-center rounded-lg">
      <WaitingRoomComp
        data={data}
        loader={loader}
        text="Please wait here until your online class begins. Once it starts, you
            will get join button."
      />
      <footer className="md:mt-6 mt-2">
        <p className="text-gray-500">
          Powered by <strong>Subhams.site</strong>
        </p>
      </footer>
    </div>
  );
};

export default WaitingRoom;
