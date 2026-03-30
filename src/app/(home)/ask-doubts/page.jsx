"use client";
import AskQuestion from "@/components/askDoubtPage/AskQuestion";
import ScanAsk from "@/components/askDoubtPage/ScanAsk";
import TextAsk from "@/components/askDoubtPage/TextAsk";
import VoiceAsk from "@/components/askDoubtPage/VoiceAsk";
import Chip from "@/components/common/Chip";
import { setSelected } from "@/GlobalRedux/Features/askQuestionData";
import { CiCamera } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const AskDoubtsPage = () => {
  const tabs = [
    { title: "Text", icon: FaRegKeyboard },
    { title: "Scan", icon: CiCamera },
    { title: "Voice", icon: IoMicOutline },
    { title: "Ask Question", icon: LuMessagesSquare },
  ];
  const select = useSelector((store) => store.askQuestion.selected);
  const selected = select !== null ? select : "Text";
  const dispatch = useDispatch();
  console.log("object", select);

  const handleTab = (data) => {
    dispatch(setSelected(data));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full mx-auto justify-center  items-center cursor-pointer my-2">
        <div className="md:w-[60%] w-[80%] mx-auto grid lg:grid-cols-4 md:grid-cols-3  grid-cols-2 gap-2 rounded-xl bg-gray-50 p-2">
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
        <h1 className="md:w-[70%] w-[95%] text-start text-xl font-bold mt-3">
          {selected === "Ask Question"
            ? "Ask a Question"
            : " What's your question"}
        </h1>
      </div>

      <div className="md:w-[70%] w-[95%] mx-auto ">
        {selected === "Text" && <TextAsk />}
        {selected === "Scan" && <ScanAsk />}
        {selected === "Voice" && <VoiceAsk />}
        {selected === "Ask Question" && <AskQuestion />}
      </div>
    </div>
  );
};

export default AskDoubtsPage;
