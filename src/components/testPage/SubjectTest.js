import { setSubjectName } from "@/GlobalRedux/Features/dropDown";
import { HiOutlinePencilAlt, HiOutlineStatusOnline } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Chip from "../common/Chip";
import TestCard from "../common/TestCard";

const SubjectTest = () => {
  const dispatch = useDispatch();
  const subjectName = useSelector((store) => store.dropDown.subjectName);
  const test_DATA = [
    {
      name: "JEE Main 2024 Test - 1",
      price: "Free",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 2",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 3",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 4",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 5",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 6",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE Main 2024 Test - 1",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
  ];

  const handleTab = (data) => {
    dispatch(setSubjectName(data));
  };

  const tabs = [
    { title: "Physics", icon: HiOutlinePencilAlt },
    { title: "Chemistry", icon: HiOutlineStatusOnline },
    { title: "Maths", icon: HiOutlinePencilAlt },
  ];
  const selected = subjectName !== null ? subjectName : "Physics";
  console.log("subject Test", selected);
  return (
    <div>
      <div className="my-2">
        <div className="md:w-fit w-[90%] mx-auto flex justify-center  gap-2 rounded-xl bg-gray-50 ">
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
      </div>
      <div className="grid  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 pt-6  grid-cols-1 gap-4 mx-auto">
        {test_DATA.map((data, index) => {
          return <TestCard key={index} data={data} width="w-[21rem]" />;
        })}
      </div>
    </div>
  );
};

export default SubjectTest;
