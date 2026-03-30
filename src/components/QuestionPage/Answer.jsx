import AlertModal from "@/components/common/AlertModal";
import UserDetailsModal from "@/components/common/userDetailsModal";
import {
  setBestAnswer,
  showOptionComment,
  showUser,
} from "@/GlobalRedux/Features/searchResults";
import { showAlert } from "@/GlobalRedux/Features/settings";
import {
  AiFillLike,
  AiFillSafetyCertificate,
  AiOutlineComment,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";

const Answer = ({ question }) => {
  const isAlert = useSelector((store) => store.settings.isAlert);
  const { bestAnswer, optionComment } = useSelector(
    (store) => store.searchResults
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="header header-1 md:w-[70%] w-[95%] md:mx-0 mx-auto my-8">
        <h2 className="md:text-2xl text-sm font-bold ribbon">Answer 1</h2>
      </div>
      <div className="flex-col shadow  rounded-lg py-2 gap-2 w-full hover:shadow-xl">
        <div className="flex items-center gap-2 justify-between md:mx-4 mx-2 ">
          <div className=" flex flex-col items-center">
            {bestAnswer ? (
              <div className="flex gap-2 items-center">
                <AiFillSafetyCertificate
                  onClick={() => dispatch(setBestAnswer())}
                  className="cursor-pointer text-green-600 "
                  size={30}
                />
                <p className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 font-semibold">
                  Best Answer
                </p>
              </div>
            ) : (
              <div className=" ">
                <AiOutlineSafetyCertificate
                  onClick={() => dispatch(setBestAnswer())}
                  className="cursor-pointer  "
                  size={30}
                />
              </div>
            )}
          </div>
          <div
            onClick={() => dispatch(showUser())}
            className="flex items-center gap-2 text-gray-600 md:text-sm text-xs cursor-pointer"
          >
            <p>answered </p>
            <FaRegUserCircle size={20} className=" " />
            <span className="text-sky-600">Subham Kumar</span>{" "}
            <span>36 seconds ago</span>
          </div>
          <UserDetailsModal />
        </div>
        <div className="flex flex-row justify-between my-3">
          <h3 className="md:text-lg text-base font-bold md:mx-4 mx-2">
            {question.answer}
          </h3>
        </div>

        <div className="flex justify-between md:mx-4 mx-2 my-4">
          <p
            onClick={() => dispatch(showOptionComment())}
            className="md:text-sm text-xs p-1 rounded-md cursor-pointer flex items-center gap-2 text-white bg-slate-950"
          >
            COMMENT <AiOutlineComment size={25} />
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            <FaFlag size={20} onClick={() => dispatch(showAlert())} />
            <p className="flex items-center gap-2">
              <AiFillLike size={22} /> <span>0</span>
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
        {optionComment && (
          <div className="transition duration-1000">
            <Comment type="answer" />
          </div>
        )}
      </div>
    </>
  );
};

export default Answer;
