"use client";
import Chip from "@/components/common/Chip";
import SearchBar from "@/components/common/SearchBar";
import PreviousClass from "@/components/livePage/PreviousClass";
import Today from "@/components/livePage/Today";
import UpcomingClass from "@/components/upcoming/UpcomingClass";
import { setSelected } from "@/GlobalRedux/Features/askQuestionData";
import { allNull } from "@/GlobalRedux/Features/dropDown";
import { resultsDataNull } from "@/GlobalRedux/Features/searchResults";
import { FaPlayCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const LiveClassPage = () => {
  const tabs = [
    { title: "Today's Class", icon: FaPlayCircle },
    { title: "Upcoming Class", icon: FaPlayCircle },
    { title: "Previous Class", icon: FaPlay },
  ];
  const select = useSelector((store) => store.askQuestion.selected);
  const selected = select !== null ? select : "Today's Class";
  const dispatch = useDispatch();
  const handleTab = (data) => {
    dispatch(setSelected(data));
    dispatch(allNull());
    dispatch(resultsDataNull());
  };

  return (
    <div className="w-full ">
      <div className="flex md:flex-row flex-col w-full mx-auto justify-between  items-center cursor-pointer ">
        <div className="md:w-[50%] w-[90%] flex justify-between rounded-xl bg-gray-50 p-2 md:mb-0 mb-2">
          {tabs.map((tab) => (
            <Chip
              text={tab.title}
              selected={selected === tab.title}
              icon={tab.icon}
              key={tab.title}
              updateTab={handleTab}
            />
          ))}
        </div>
        <div className="md:w-[40%] w-[90%] mx-auto">
          <SearchBar />
        </div>
      </div>

      <div className="md:w-full w-[100%] mx-auto ">
        {selected === "Today's Class" && <Today />}
        {selected === "Upcoming Class" && <UpcomingClass />}
        {selected === "Previous Class" && <PreviousClass />}
      </div>
    </div>
  );
};

export default LiveClassPage;
