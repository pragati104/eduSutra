import mcq from "@/Data/mcq.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = Object.keys(mcq).reduce((acc, subject) => {
  if (subject !== "subject") {
    acc[subject] = [];
    Object.keys(mcq[subject]).forEach((questionNo) => {
      const { type, options, question } = mcq[subject][questionNo];
      acc[subject][questionNo] = {
        ans: type === "multiple" ? [] : "",
        marked: false,
        answered: null,
        timeTaken: null,
        type: type,
        options: options,
        question: question,
      };
    });
  } else {
    acc["subject"] = [];
    Object.keys(mcq.subject).forEach((sub) => {
      const { subject_id, subject_name } = mcq.subject[sub];
      acc["subject"][sub] = {
        answered: 0,
        notAnswered: mcq[subject_name].length,
        notVisited:
          subject_name === "physics"
            ? mcq[subject_name].length - 1
            : mcq[subject_name].length,
        marked: 0,
        markedAndAnswered: 0,
        subject_id: subject_id,
        subject_name: subject_name,
      };
    });
  }
  return acc;
}, {});

const firstSubject = mcq["subject"][0]?.subject_name || "";
const firstQuestionNo = 0;
const firstType = mcq[firstSubject]?.[firstQuestionNo]?.type || "";

const testSlice = createSlice({
  name: "test",
  initialState: {
    next: false,
    language: "English",
    questionNo: parseInt(firstQuestionNo),
    subject: firstSubject,
    type: firstType,
    timeTaken: null,
    selectedOption: initialState,
    markedTrueCount: 0,
    markedFalseCount: 0,
    answeredTrueCount: 0,
    answeredFalseCount: 0,
    showQuestionPaper: false,
    selected: null,
    showSubmitModal: false,
    showFlag: false,
    showQuestionListSidebar: false,
  },
  reducers: {
    setNext: (state) => {
      state.next = !state.next;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setQuestionDetails: (state, action) => {
      const { no, sub, type } = action.payload;
      state.questionNo = no;
      state.subject = sub;
      state.type = type;
      // state.selectedOption[sub][no].answered = false;
    },
    setTimeTaken: (state, action) => {
      state.timeTaken = action.payload;
    },
    optionChange: (state, action) => {
      console.log("object", action);
      const { subject, questionNo, correctOption, type } = action.payload;
      const currentAns = state.selectedOption[subject][questionNo].ans;
      let updatedAns;

      if (type === "single") {
        updatedAns = correctOption;
      } else if (type === "multiple") {
        if (currentAns.includes(correctOption)) {
          updatedAns = currentAns.filter((option) => option !== correctOption);
        } else {
          updatedAns = [...currentAns, correctOption];
        }
      }
      state.selectedOption[subject][questionNo] = {
        ...state.selectedOption[subject][questionNo],
        ans: updatedAns,
      };
    },
    clearSelection: (state, action) => {
      const { subject, questionNo, type } = action.payload;
      let updatedAns = type === "single" ? "" : [];
      const questionList = state.selectedOption[subject];
      const subjectData = state.selectedOption.subject;
      const questionAns = questionList[questionNo].ans;
      const isAns = questionAns.length > 0;
      if (isAns) {
        subjectData.forEach((subj) => {
          if (subj.subject_name === subject) {
            subj.notAnswered = (subj.notAnswered || 0) + 1;
            subj.answered = (subj.answered || 0) - 1;
          }
        });
      }
      state.selectedOption[subject][questionNo] = {
        ...state.selectedOption[subject][questionNo],
        ans: updatedAns,
      };
    },
    reviewAndNext: (state, action) => {
      const { subject, questionNo, type, totalSeconds } = action.payload;
      const questionList = state.selectedOption[subject];
      const subjectData = state.selectedOption.subject;
      const questionAns = questionList[questionNo].ans;
      const updatedAns = questionAns.length > 0;

      // Mark the current question as answered and marked
      questionList[questionNo] = {
        ...questionList[questionNo],
        answered: updatedAns,
        marked: true,
        timeTaken: totalSeconds,
      };

      // Update the counts for the current subject
      subjectData.forEach((subj) => {
        if (subj.subject_name === subject) {
          if (updatedAns) {
            subj.answered = (subj.answered || 0) + 1;
            subj.notAnswered = (subj.notAnswered || 0) - 1;
            if (questionList[questionNo].marked) {
              subj.markedAndAnswered = (subj.markedAndAnswered || 0) + 1;
            }
          } else {
            subj.marked = (subj.marked || 0) + 1;
          }
          subj.notVisited = (subj.notVisited || 0) - 1;
        }
      });

      // Check if the current question is the last in the list
      if (questionNo === questionList.length - 1) {
        const nextQuestionNo = 0; // Loop back to the first question
        const nextSubject =
          subject === "physics"
            ? "chemistry"
            : subject === "chemistry"
            ? "mathematics"
            : "physics"; // Rotate to the next subject

        state.questionNo = nextQuestionNo;
        state.subject = nextSubject;
        state.type = state.selectedOption[nextSubject][0].type;
      } else {
        // Move to the next question in the current subject
        state.questionNo = questionNo + 1;
        state.subject = subject;
        state.type = type;
      }
    },
    saveAndNext: (state, action) => {
      console.log("object", action);
      const { subject, questionNo, type, totalSeconds } = action.payload;
      const questionList = state.selectedOption[subject];
      const questionAns = questionList[questionNo].ans;
      const subjectData = state.selectedOption.subject;
      const updatedAns = questionAns.length ? true : false;
      questionList[questionNo] = {
        ...questionList[questionNo],
        answered: updatedAns,
        marked: false,
        timeTaken: totalSeconds,
      };
      // Update the marked count for the current subject
      if (updatedAns) {
        subjectData.forEach((subj) => {
          if (subj.subject_name === subject) {
            subj.answered = (subj.answered || 0) + 1;
            // subj.markedAndAnswered = (subj.answered || 0) - 1;
            subj.notAnswered = (subj.notAnswered || 0) - 1;
          }
        });
      }
      subjectData.forEach((subj) => {
        if (subj.subject_name === subject) {
          subj.notVisited = (subj.notVisited || 0) - 1;
        }
      });
      if (questionNo === questionList.length - 1) {
        const nextQuestionNo =
          questionNo === questionList.length - 1 ? 0 : questionNo + 1;
        const nextSubject =
          subject === "physics"
            ? "chemistry"
            : subject === "chemistry"
            ? "mathematics"
            : "physics";
        state.questionNo = nextQuestionNo;
        state.subject = nextSubject;
        state.type = state.selectedOption[nextSubject][0].type;
      } else {
        state.questionNo = questionNo + 1;
        state.subject = subject;
        state.type = type;
      }
    },
    previousQuestion: (state, action) => {
      const { subject, questionNo, type } = action.payload;
      if (questionNo === 0) {
        const nextSubject =
          subject === "physics"
            ? "mathematics"
            : subject === "chemistry"
            ? "physics"
            : "chemistry";

        const nextQuestionNo =
          questionNo === 0
            ? state.selectedOption[nextSubject].length - 1
            : questionNo - 1;
        state.questionNo = nextQuestionNo;
        state.subject = nextSubject;
        state.type = state.selectedOption[nextSubject][0].type;
      } else {
        state.questionNo = questionNo - 1;
        state.subject = subject;
        state.type = type;
      }
    },
    setShowQuestionPaper: (state) => {
      state.showQuestionPaper = !state.showQuestionPaper;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setShowSubmitModal: (state, action) => {
      state.showSubmitModal = action.payload;
    },
    setShowFlag: (state, action) => {
      state.showFlag = action.payload;
    },
    setShowQuestionListSidebar: (state) => {
      state.showQuestionListSidebar = !state.showQuestionListSidebar;
    },
  },
});

export default testSlice.reducer;
export const {
  setNext,
  setLanguage,
  setQuestionDetails,
  setTimeTaken,
  optionChange,
  clearSelection,
  reviewAndNext,
  saveAndNext,
  previousQuestion,
  setShowQuestionPaper,
  setSelected,
  setShowSubmitModal,
  setShowFlag,
  setShowQuestionListSidebar,
  setShowTimeLeft,
} = testSlice.actions;
