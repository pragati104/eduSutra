"use client";
import Arrow from "@/components/common/Arrow";
import BarGraph from "@/components/testPage/Graphs/BarGraph";
import PieGraph from "@/components/testPage/Graphs/PieGraph";
import RadialGraph from "@/components/testPage/Graphs/RadialGraph";
import Tabs from "@/components/testPage/testDetails/Tabs";
import coinAnime from "@/Data/coinAnime.json";
import Lottie from "lottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillExclamationCircle } from "react-icons/ai";
import { LiaNewspaperSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

const TestAnalysis = () => {
  const data = [
    { key: "Coins Earned", value: "3", url: "/assests/coin.png" },
    { key: "your Score", value: "3/300", url: "/assests/trophy.png" },
    { key: "Attempted", value: "2 / 90", url: "/assests/writing.png" },
    { key: "Correct", value: "1", url: "/assests/check.png" },
    { key: "Accuracy", value: "50%", url: "/assests/accuracy.png" },
    { key: "Average Score", value: "19", url: "/assests/average.png" },
    { key: "Percentile", value: "32.85", url: "/assests/discount.png" },
    { key: "Time Taken", value: "23m 56s", url: "/assests/chronometer.png" },
    { key: "Top Score", value: "249", url: "/assests/1st-prize.png" },
    { key: "Live Rank", value: "158", url: "/assests/1st-prize.png" },
  ];
  const tabs = [
    { title: "All", icon: LiaNewspaperSolid },
    { title: "Physics", icon: LiaNewspaperSolid },
    { title: "Chemistry", icon: LiaNewspaperSolid },
    { title: "Mathematics", icon: LiaNewspaperSolid },
  ];
  const { selected } = useSelector((store) => store.test);
  const selectedSubject = selected !== null ? selected : "All";

  const dataSumm = [
    { label: "Score", value: "3" },
    { label: "Attempted", value: "2" },
    { label: "Correct", value: "1" },
    // { label: "Incorrect", value: "3" },
    { label: "Time Spent", value: "23m 6s" },
  ];
  const router = useRouter();

  const difficultyLevelGraphData = [
    {
      name: "Easy",
      Unattempted: 0,
      Incorrect: 0,
      Correct: 0,
      amt: 90,
    },
    {
      name: "Medium",
      Unattempted: 86,
      Incorrect: 8,
      Correct: 9,
      amt: 90,
    },
    {
      name: "Hard",
      Unattempted: 10,
      Incorrect: 16,
      Correct: 12,
      amt: 90,
    },
  ];
  const TimeTakenGraphData = [
    {
      name: "You",
      "Time Taken": 25,
      amt: 60,
    },
    {
      name: "Average",
      "Time Taken": 20,
      amt: 60,
    },
    {
      name: "Topper",
      "Time Taken": 15,
      amt: 60,
    },
  ];
  const sectionalSummaryGraphData = [
    {
      name: "Physics",
      Unattempted: 5,
      Incorrect: 15,
      Correct: 10,
      amt: 30,
    },
    {
      name: "Chemistry",
      Unattempted: 12,
      Incorrect: 5,
      Correct: 10,
      amt: 30,
    },
    {
      name: "Maths",
      Unattempted: 30,
      Incorrect: 0,
      Correct: 0,
      amt: 30,
    },
  ];
  const attemptBasedGraphData = [
    {
      name: "You",
      Unattempted: 60,
      Incorrect: 15,
      Correct: 10,
      amt: 100,
    },
    {
      name: "Average",
      Unattempted: 59,
      Incorrect: 21,
      Correct: 10,
      amt: 100,
    },
    {
      name: "Topper",
      Unattempted: 21,
      Incorrect: 16,
      Correct: 63,
      amt: 100,
    },
  ];

  const pieGraphData = [
    { name: "Correct", value: 5 },
    { name: "Incorrect", value: 10 },
    { name: "Unattempted", value: 75 },
  ];

  const radialGraphData = [
    {
      name: "You",
      value: 30,
      fill: "#8884d8",
    },
    {
      name: "Average",
      value: 60,
      fill: "#83a6ed",
    },
    {
      name: "Topper",
      value: 90,
      fill: "#8dd1e1",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col w-[95%] lg:w-[80%] mx-auto justify-between items-center cursor-pointer my-2">
        <div className="header header-1 w-full mb-8">
          <h2 className="md:text-2xl text-base font-semibold ribbon">
            Result Analysis:
          </h2>
        </div>

        <div className="relative grid grid-cols-2 border-gray-100 border rounded-md mb-4 p-3 gap-4 w-full">
          {data.map((d, index) => (
            <div
              className={`${
                index === 0 ? "bg-green-100" : "bg-green-950/5"
              }  shadow-md p-3 font-bold rounded-md flex justify-between items-center gap-2 `}
              key={index}
            >
              <div className="relative flex items-center gap-3 lg:text-base text-sm">
                {index === 0 ? (
                  <Lottie
                    animationData={coinAnime}
                    className="w-1/3 md:w-1/3 absolute md:-ml-6 -ml-4"
                  />
                ) : (
                  <Image
                    src={d.url}
                    alt={d.url}
                    height={30}
                    width={30}
                    className="absolute"
                  />
                )}
                <div
                  className={`flex gap-3 flex-wrap ${
                    index === 0 ? "md:ml-16 ml-7" : "md:ml-16 ml-7"
                  }  `}
                >
                  <p className="md:text-base text-xs">{d.key}:</p>{" "}
                  <p className="md:text-base text-xs">{d.value}</p>
                </div>
              </div>
              {d.key === "Live Rank" && (
                <section className="  flex justify-center items-center ">
                  <div className="group flex justify-center transition-all rounded-full bg-gray-200 p-1">
                    <AiFillExclamationCircle />
                    <span className="z-20 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 bg-red-100 p-2 rounded-md absolute duration-700 text-xs  w-[25%] text-center">
                      Your live rank may change if someone scores higher than
                      you.
                    </span>
                  </div>
                </section>
              )}
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-2 justify-between  mb-8 gap-2">
          <div
            onClick={() => router.push("/tests/1/solutions")}
            className="shadow-md  py-2 px-4 font-bold rounded-md flex justify-between items-center bg-primaryLight w-[100%] float-right text-white"
          >
            <div className="flex gap-3 lg:items-center items-center lg:text-base text-sm">
              <Image
                src="/assests/jigsaw.png"
                alt="leader"
                height={30}
                width={30}
              />{" "}
              Solutions
            </div>
            <Arrow
              type="forward"
              click={() => router.push("/tests/1/solutions")}
            />
          </div>
          <div
            onClick={() => router.push("/tests/1/leaderboard")}
            className="shadow-md  py-2 px-4 font-bold rounded-md flex justify-between items-center bg-primaryLight w-[100%] float-right text-white"
          >
            <div className="flex gap-3 lg:items-end items-center lg:text-base text-sm">
              <Image
                src="/assests/winners.png"
                alt="leader"
                height={30}
                width={30}
              />{" "}
              Leaderboard
            </div>
            <Arrow
              type="forward"
              click={() => router.push("/tests/1/leaderboard")}
            />
          </div>
        </div>
        <div className="w-full">
          <div>
            <div className="header header-1 w-full">
              <h2 className="md:text-2xl text-base font-semibold ribbon">
                Overall Summary:
              </h2>
            </div>
            <div className="flex flex-row justify-center items-start my-2 mt-6 w-full">
              {tabs.map((tab) => (
                <Tabs
                  text={tab.title}
                  selected={selectedSubject === tab.title}
                  icon={tab.icon}
                  key={tab.title}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-4">
              <div className="  bg-white shadow-md rounded-md border-gray-200 border">
                <div className="mx-2">
                  <p className="text-center font-bold mb-2">
                    {selectedSubject}
                  </p>
                  <div className=" grid grid-cols-2 gap-3">
                    {dataSumm.map((each, i) => {
                      return (
                        <div
                          key={i}
                          className="flex shadow-md justify-between gap-2 font-bold rounded-md items-center bg-green-950/5 text-start  p-2"
                        >
                          <span>{each.label}</span>
                          <span>{each.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <RadialGraph
                  data={radialGraphData}
                  // dataKey1="Correct"
                  title="Accuracy"
                />
              </div>
              <div className="bg-white shadow-md rounded-md border-gray-200 border">
                <PieGraph data={pieGraphData} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            <div className="my-8 bg-white shadow-md rounded-md">
              <BarGraph
                data={difficultyLevelGraphData}
                dataKey1="Correct"
                dataKey2="Incorrect"
                dataKey3="Unattempted"
                title="Difficulty Level Graph"
              />
            </div>
            <div className="my-8 bg-white shadow-md rounded-md border-gray-200 border">
              <BarGraph
                data={sectionalSummaryGraphData}
                dataKey1="Correct"
                dataKey2="Incorrect"
                dataKey3="Unattempted"
                title="Sectional Summary Graph"
              />
            </div>
            <div className="mb-8 bg-white shadow-md rounded-md border-gray-200 border">
              <BarGraph
                data={TimeTakenGraphData}
                dataKey1="Time Taken"
                title="Time Taken Graph"
              />
            </div>
            <div className="mb-8 bg-white shadow-md rounded-md border-gray-200 border">
              <BarGraph
                data={attemptBasedGraphData}
                dataKey1="Correct"
                dataKey2="Incorrect"
                dataKey3="Unattempted"
                title="Attempt Based Graph"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestAnalysis;
