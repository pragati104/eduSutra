"use client";
import Arrow from "@/components/common/Arrow";
import Tabs from "@/components/testPage/testDetails/Tabs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaRankingStar } from "react-icons/fa6";
import { useSelector } from "react-redux";

const LeaderBoardPage = () => {
  const data = [
    { name: "Aarav Sharma", score: 67, rank: 1, image: "image1.jpg" },
    { name: "Aisha Verma", score: 34, rank: 2, image: "image2.jpg" },
    { name: "Rajesh Kumar", score: 89, rank: 3, image: "image3.jpg" },
    { name: "Nisha Gupta", score: 45, rank: 4, image: "image4.jpg" },
    { name: "Vikram Singh", score: 78, rank: 5, image: "image5.jpg" },
    { name: "Priya Patel", score: 56, rank: 6, image: "image6.jpg" },
    { name: "Karan Mehta", score: 92, rank: 7, image: "image7.jpg" },
    { name: "Ananya Rao", score: 61, rank: 8, image: "image8.jpg" },
    { name: "Sanjay Joshi", score: 83, rank: 9, image: "image9.jpg" },
    { name: "Riya Shah", score: 49, rank: 10, image: "image10.jpg" },
    { name: "Aman Tiwari", score: 72, rank: 11, image: "image11.jpg" },
    { name: "Neha Desai", score: 58, rank: 12, image: "image12.jpg" },
    { name: "Rohan Nair", score: 80, rank: 13, image: "image13.jpg" },
    { name: "Meera Das", score: 66, rank: 14, image: "image14.jpg" },
    { name: "Arjun Iyer", score: 77, rank: 15, image: "image15.jpg" },
    { name: "Sana Reddy", score: 50, rank: 16, image: "image16.jpg" },
    { name: "Dev Chatterjee", score: 85, rank: 17, image: "image17.jpg" },
    { name: "Pooja Bhatia", score: 64, rank: 18, image: "image18.jpg" },
    { name: "Ravi Aggarwal", score: 93, rank: 19, image: "image19.jpg" },
    { name: "Anjali Roy", score: 55, rank: 20, image: "image20.jpg" },
    { name: "Manish Singh", score: 82, rank: 21, image: "image21.jpg" },
    { name: "Sneha Kapoor", score: 59, rank: 22, image: "image22.jpg" },
    { name: "Vishal Pandey", score: 70, rank: 23, image: "image23.jpg" },
    { name: "Sakshi Sinha", score: 47, rank: 24, image: "image24.jpg" },
    { name: "Aditya Gupta", score: 75, rank: 25, image: "image25.jpg" },
  ];

  const tabs = [
    { title: "Overall", icon: FaRankingStar },
    { title: "This week", icon: FaRankingStar },
    { title: "This month", icon: FaRankingStar },
  ];

  const badge = ["badge gold text-lg", "badge silver", "badge bronze"];

  const router = useRouter();

  const { selected } = useSelector((store) => store.test);
  const selectedSubject = selected !== null ? selected : "Overall";

  return (
    <div className="w-full flex">
      <div className="flex flex-col w-full mx-auto justify-between items-center cursor-pointer">
        <div className="flex flex-row justify-center items-center lg:w-[70%] w-[100%] mx-auto pl-2">
          <Arrow type="back" click={() => router.push("/tests/1/result")} />
          <div className="flex flex-row justify-between mx-2 items-start bg-gray-50 rounded-md w-full">
            {tabs.map((tab) => (
              <Tabs
                text={tab.title}
                selected={selectedSubject === tab.title}
                icon={tab.icon}
                key={tab.title}
              />
            ))}
          </div>
        </div>
        <div className="lg:w-[60%] w-[90%] mx-auto mt-3">
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -2px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset",
            }}
            className={`flex justify-between bg-primaryDark text-white shadow-md p-4 rounded-md w-full`}
          >
            <div className="flex justify-between lg:w-[30%] w-[40%]">
              <p className="font-bold">Rank</p>
              <p className="font-bold">Name</p>
            </div>
            <p className="font-bold">Score</p>
          </div>
          <div className="flex justify-between items-center shadow-md py-2 px-6 hover:shadow-sm bg-primaryLight text-white rounded-md my-1">
            <div className="flex justify-between items-center lg:w-[40%] w-[70%]">
              <div className="rounded-full w-8 h-8 shadow-md flex items-center justify-center bg-white">
                <div
                  className={`rounded-full shadow-md w-7 h-7 flex items-center justify-center font-bold  text-black`}
                >
                  50
                </div>
              </div>
              <div className="flex gap-2 items-center w-40">
                <Image
                  alt="d.name"
                  src={"/assests/chandvi.jpg"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />{" "}
                {"Subham Kumar"}
              </div>
            </div>
            <p className="font-bold">{"100"}</p>
          </div>
          <div className="overflow-auto h-[30rem] no-scrollbar text-white">
            {data.map((d, i) => {
              return (
                <div
                  key={i}
                  className="flex my-1 justify-between items-center shadow-md py-2 px-6 hover:shadow-sm bg-primaryDark rounded-md "
                >
                  <div className="flex justify-between items-center lg:w-[40%] w-[70%]">
                    <div className="rounded-full w-8 h-8 shadow-md flex items-center justify-center bg-white">
                      <div
                        className={`rounded-full shadow-md w-7 h-7 flex items-center justify-center font-bold text-black ${
                          i < 3 && badge[i]
                        }`}
                      >
                        {d.rank}
                      </div>
                    </div>
                    <p className="flex gap-2 items-center w-40">
                      <Image
                        alt="d.name"
                        src={"/assests/avatar.png"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />{" "}
                      {d.name}
                    </p>
                  </div>
                  <p className="font-bold">{d.score}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
