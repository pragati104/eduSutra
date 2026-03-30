"use client";
import { showUser } from "@/GlobalRedux/Features/searchResults";
import { showReportBlock } from "@/GlobalRedux/Features/userSlice";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineComment } from "react-icons/ai";
import {
  BsPatchCheck,
  BsPatchQuestion,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { GrScorecard } from "react-icons/gr";
import { LiaVoteYeaSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

const UserDetailsModal = () => {
  const dispatch = useDispatch();
  const isReportBlock = useSelector((store) => store.user.isReportBlock);
  const isUser = useSelector((store) => store.searchResults.isUser);
  const stats = [
    {
      data: "15.1K",
      title: "Score",
      icon: GrScorecard,
      href: "qa/myasked",
    },
    {
      data: "133",
      title: "Questions",
      icon: BsPatchQuestion,
      href: "qa/myanswered",
    },
    {
      data: "170",
      title: "Answers",
      icon: BsPatchCheck,
      href: "tests",
    },
    { data: "0", title: "Comments", icon: AiOutlineComment, href: "quiz" },
    { data: "360", title: "Votes Given", icon: LiaVoteYeaSolid, href: "quiz" },
    {
      data: "115",
      title: "Votes Recieved",
      icon: LiaVoteYeaSolid,
      href: "quiz",
    },
  ];
  const handleModal = () => {
    dispatch(showUser());
  };
  const handleBlock = () => {
    dispatch(showUser());
    dispatch(showReportBlock());
  };
  const handleReport = () => {
    dispatch(showUser());
    dispatch(showReportBlock());
  };
  return (
    <AnimatePresence>
      {isUser && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => handleModal()}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br   from-violet-600 to-indigo-600 text-white md:p-6 p-3 rounded-lg w-full max-w-lg h-fit  shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <RxCross2
                size={25}
                onClick={() => handleModal()}
                className="absolute left-0 top-0 cursor-pointer"
              />
              <div className="absolute right-0">
                <BsThreeDotsVertical
                  onClick={() => dispatch(showReportBlock())}
                  size={25}
                  className="font-bold cursor-pointer"
                />
                <div
                  className={`right-0 absolute bg-white rounded-md shadow-md p-3 text-black cursor-pointer my-2 px-4 font-semibold ${
                    isReportBlock ? "visible" : "hidden"
                  }`}
                >
                  <p onClick={handleReport} className="my-1">
                    Report
                  </p>
                  <p onClick={handleBlock}>Block</p>
                </div>
              </div>
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <Image
                  src="/assests/avatar.png"
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Shubham Kumar
              </h3>
              <div className="flex gap-1 justify-center items-center my-2">
                <section className="md:p-4 p-2 ">
                  <div className="header header-1 w-[100%] mb-8">
                    <h2 className="md:text-2xl text-base font-semibold ribbon ">
                      Your Activity
                    </h2>
                  </div>
                  <div className="container grid grid-cols-2 gap-2  mx-auto ">
                    {stats.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center items-center p-4 space-x-4 rounded-lg md:space-x-6  shadow-md  cursor-pointer hover:shadow-emerald-50 shadow-indigo-900/50 "
                        >
                          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-2.5 bg-indigo-800 w-[30%]">
                            <data.icon size={30} />
                          </div>
                          <div className="flex flex-col justify-center text-center w-[70%]">
                            <p className="md:text-xl text-base font-semibold leading-none">
                              {data.data}
                            </p>
                            <p className="capitalize text-base">{data.title}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserDetailsModal;
