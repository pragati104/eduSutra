import { setYear, showDropDown } from "@/GlobalRedux/Features/dropDown";
import { useDispatch, useSelector } from "react-redux";
import SubjectDropDown from "../common/SubjectDropDown";
import TestCard from "../common/TestCard";

const PreviousYears = () => {
  const dispatch = useDispatch();
  const years = [
    { label: "2023", value: 2023 },
    { label: "2022", value: 2022 },
    { label: "2021", value: 2021 },
    { label: "2020", value: 2020 },
    { label: "2019", value: 2019 },
  ];
  const test_DATA = [
    {
      name: "JEE-Main Exam 24th June 2022(Morning Session)",
      price: "Free",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 24th June 2022(Evening Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 25th June 2022(Morning Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 25th June 2022(Evening Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 26th June 2022(Morning Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 26th June 2022(Evening Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 27th June 2022(Morning Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 27th June 2022(Evening Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 28th June 2022(Morning Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
    {
      name: "JEE-Main Exam 28th June 2022(Evening Session)",
      price: "Premium",
      benefits: ["90 Questions", "180 minutes", "300 marks"],
    },
  ];
  const selectedYear = useSelector((store) => store.dropDown.year);
  const handleDropDownData = (data) => {
    dispatch(setYear(data));
    dispatch(showDropDown());
  };
  return (
    <div className="">
      <div className="my-2">
        <SubjectDropDown
          name="Year"
          currentName={selectedYear}
          allData={years}
          handleDropDownData={handleDropDownData}
        />
      </div>
      <div className="grid  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2  grid-cols-1    gap-4  mx-auto">
        {test_DATA.map((data, index) => {
          return <TestCard key={index} data={data} width="w-[21rem]" />;
        })}
      </div>
    </div>
  );
};

export default PreviousYears;
