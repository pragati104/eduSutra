"use client";
import {
  clearSelection,
  previousQuestion,
  reviewAndNext,
  saveAndNext,
} from "@/GlobalRedux/Features/testSlice";
import QuestionPaper from "@/components/testPage/testDetails/QuestionPaper";
import SubmitTestModal from "@/components/testPage/testDetails/SubmitTestModal";
import TestAnswer from "@/components/testPage/testDetails/TestAnswer";
import TestButtons from "@/components/testPage/testDetails/TestButtons";
import TestSidebar from "@/components/testPage/testDetails/TestSidebar";
import TestSubjects from "@/components/testPage/testDetails/TestSubjects";
import { useDispatch, useSelector } from "react-redux";

const MainTestPage = () => {
  const dispatch = useDispatch();
  const {
    questionNo,
    subject,
    selectedOption,
    showQuestionPaper,
    showSubmitModal,
  } = useSelector((store) => store.test);

  console.log(selectedOption);

  const clear = (subject, questionNo, type) => {
    dispatch(clearSelection({ subject, questionNo, type }));
  };
  const reviewNext = (subject, questionNo, type, totalSeconds) => {
    if (questionNo === selectedOption[subject].length - 1) {
      dispatch(reviewAndNext({ subject, questionNo, type, totalSeconds }));
    }
    dispatch(reviewAndNext({ subject, questionNo, type }));
  };
  const saveNext = (subject, questionNo, type, totalSeconds) => {
    dispatch(saveAndNext({ subject, questionNo, type, totalSeconds }));
  };

  const previous = (subject, questionNo, type) => {
    dispatch(previousQuestion({ subject, questionNo, type }));
  };

  return (
    <>
      {!showQuestionPaper ? (
        <div className="h-screen w-full overflow-y-auto flex">
          <div className="lg:w-[80%] w-[95%] lg:mx-0 mx-auto bg-gray-100 pb-0 ">
            <div className="bg-white rounded-md md:px-3">
              <TestSubjects />
              <div className=" flex justify-between items-center my-1 ">
                <div className="font-semibold md:text-lg text-base mt-2 mx-2">
                  Question No. {questionNo + 1} of{" "}
                  {selectedOption[subject.toLowerCase()].length}
                </div>
                <div className="rounded-md font-semibold capitalize bg-white p-1 shadow-md lg:text-base text-sm">
                  <div className="bg-fuchsia-900 text-white rounded-md p-1">
                    {selectedOption[subject.toLowerCase()][questionNo].type}{" "}
                    {selectedOption[subject.toLowerCase()][questionNo].type ===
                    "match the following"
                      ? ""
                      : "choice type"}
                  </div>
                </div>
              </div>
              <div className="border-t lg:h-[500px] h-[460px] overflow-auto mb-1  ">
                <div className="m-2 md:text-lg text-base">
                  {selectedOption[subject.toLowerCase()][questionNo].question}
                </div>
                <TestAnswer />
              </div>
            </div>
            <TestButtons
              clear={clear}
              previous={previous}
              saveNext={saveNext}
              reviewNext={reviewNext}
            />
          </div>{" "}
          <TestSidebar />
        </div>
      ) : (
        <QuestionPaper />
      )}

      <SubmitTestModal isOpen={showSubmitModal} />
    </>
  );
};

export default MainTestPage;
