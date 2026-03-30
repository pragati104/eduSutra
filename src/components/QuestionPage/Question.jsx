"use client";
import AlertModal from "@/components/common/AlertModal";
import UserDetailsModal from "@/components/common/userDetailsModal";
import {
  showBookmark,
  showQuestionComment,
  showUser,
} from "@/GlobalRedux/Features/searchResults";
import { showAlert } from "@/GlobalRedux/Features/settings";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { FaEye, FaRegStar, FaRegUserCircle, FaStar } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const isAlert = useSelector((store) => store.settings.isAlert);
  const { bookmark, questionComment } = useSelector(
    (store) => store.searchResults
  );
  const [id, setId] = useState(true);
  const router = useRouter();

  return (
    <>
      <div className="flex-col shadow my-4 mt-6 rounded-lg py-2 gap-2 w-full duration-200">
        <div className="flex flex-row justify-between">
          <h3 className="md:text-xl text-base font-bold md:mx-4 mx-2">
            {question.title}
          </h3>
          <p className="h-fit bg-black text-white md:text-sm text-xs font-semibold w-fit p-1 md:mx-4 mx-2 ml-auto rounded-lg">
            {bookmark ? (
              <FaStar
                className="cursor-pointer"
                onClick={() => dispatch(showBookmark())}
                size={20}
              />
            ) : (
              <FaRegStar
                className="cursor-pointer"
                size={20}
                onClick={() => dispatch(showBookmark())}
              />
            )}
          </p>
        </div>
      </div>
      <div className="flex-col shadow my-2 mt-4 rounded-lg py-2 gap-2 w-full hover:shadow-xl">
        <div className="flex flex-row justify-between">
          <h3 className="md:text-lg text-base font-bold md:mx-4 mx-2">
            {question.question}
          </h3>
          <p className="h-fit bg-gray-300 md:text-sm text-xs font-semibold w-fit p-1 md:mx-4 mx-2 ml-auto rounded-lg">
            Computer
          </p>
        </div>
        <div className="md:text-base text-sm  md:mx-4 mx-2  my-4">
          {question.options.length > 0 &&
            question.options.map((option, index) => (
              <p className="my-2" key={index}>
                ({String.fromCharCode(97 + index)}) {option}
              </p>
            ))}
        </div>
        <div className="flex items-center gap-2 justify-between md:mx-4 mx-2 my-4">
          <div className="flex justify-start items-center gap-2 md:text-sm text-[10px] font-semibold">
            <p className="bg-gray-200 text-black p-1 rounded-md">bpsc</p>
            <p className="bg-gray-200 text-black p-1 rounded-md">bpsc</p>
          </div>
          <div
            onClick={() => dispatch(showUser())}
            className="flex items-center gap-2 text-gray-600 md:text-sm text-xs cursor-pointer"
          >
            <p>asked </p>
            <FaRegUserCircle className=" " size={20} />
            <span className="text-sky-600">Subham Kumar</span>{" "}
            <span>36 seconds ago</span>
          </div>
          <UserDetailsModal />
        </div>
        <div className="flex justify-between md:mx-4 mx-2 my-3">
          <p
            onClick={() => dispatch(showQuestionComment())}
            className="md:text-sm text-xs p-1 rounded-md cursor-pointer flex items-center gap-2 text-white bg-slate-950"
          >
            COMMENT <AiOutlineComment size={25} />
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            {id ? (
              <>
                <HiLightBulb size={22} />{" "}
                <CiEdit onClick={() => router.push("/ask-doubts")} size={22} />
              </>
            ) : (
              <>
                <FaFlag size={20} onClick={() => dispatch(showAlert())} />
                <p className="flex items-center gap-2">
                  <AiFillLike size={22} /> <span>0</span>
                </p>
              </>
            )}
            <p className="flex  items-center gap-2">
              <FaEye size={20} /> <span>91</span>
            </p>
          </div>
          {isAlert && (
            <AlertModal
              message="Are you sure you want to flag this answer as span or inappropriate"
              button1="NO"
              button2="YES"
              isAlert={isAlert}
              setAlert={() => dispatch(showAlert())}
            />
          )}
        </div>
        {/* comments */}
        {questionComment && <Comment type="question" />}
      </div>
    </>
  );
};

export default Question;
