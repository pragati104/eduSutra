"use client";
import Chip from "@/components/common/Chip";
import ChapterTest from "@/components/testPage/ChapterTest";
import FullTest from "@/components/testPage/FullTest";
import LiveTest from "@/components/testPage/LiveTest";
import MyTest from "@/components/testPage/MyTest";
import PreviousYears from "@/components/testPage/PreviousYears";
import SubjectTest from "@/components/testPage/SubjectTest";
import { setSelected } from "@/GlobalRedux/Features/askQuestionData";
import { setSubjectName } from "@/GlobalRedux/Features/dropDown";
import { HiOutlinePencilAlt, HiOutlineStatusOnline } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

function TestPage() {
  const dispatch = useDispatch();
  const tabs = [
    { title: "My Test", icon: HiOutlinePencilAlt },
    { title: "Live Test", icon: HiOutlineStatusOnline },
    { title: "Full Test", icon: HiOutlinePencilAlt },
    { title: "Subject Test", icon: HiOutlinePencilAlt },
    { title: "Chapter Test", icon: HiOutlinePencilAlt },
    { title: "Previous Years", icon: HiOutlinePencilAlt },
  ];
  const select = useSelector((store) => store.askQuestion.selected);

  const selected = select !== null ? select : "My Test";

  const handleTab = (data) => {
    dispatch(setSelected(data));
    dispatch(setSubjectName(data));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full mx-auto justify-between  items-center cursor-pointer my-2">
        <div className="md:w-[90%] w-[90%] mx-auto grid  xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3  grid-cols-2  place-self-start  gap-2 rounded-xl bg-gray-50 p-2">
          {tabs.map((tab, index) => (
            <Chip
              text={tab.title}
              selected={selected === tab.title}
              icon={tab.icon}
              key={tab.title}
              updateTab={handleTab}
            />
          ))}
        </div>

        <div className="mx-auto w-[95%]">
          {selected === "My Test" && <MyTest />}
          {selected === "Live Test" && <LiveTest />}
          {selected === "Full Test" && <FullTest />}
          {selected === "Subject Test" && <SubjectTest />}
          {selected === "Chapter Test" && <ChapterTest />}
          {selected === "Previous Years" && <PreviousYears />}
        </div>
      </div>
    </div>
  );
}

export default TestPage;
