const handleOptionChange = (subject, questionNo, ans, type) => {
    const correctOption = String(ans + 1);
    dispatch(optionChange({subject, questionNo, correctOption, type}))
    // setSelectedOptions((prevSelectedOptions) => {
    //   const currentAns = prevSelectedOptions[subject][questionNo].ans;
    //   let updatedAns;
    //   if (type === "single") {
    //     updatedAns = correctOption;
    //   } else {
    //     if (currentAns.includes(correctOption)) {
    //       // If the option is already selected, remove it from the array
    //       updatedAns = currentAns.filter((option) => option !== correctOption);
    //     } else {
    //       // If the option is not selected, add it to the array
    //       updatedAns = [...currentAns, correctOption];
    //     }
    //   }
    //   return {
    //     ...prevSelectedOptions,
    //     [subject]: {
    //       ...prevSelectedOptions[subject],
    //       [questionNo]: {
    //         ...prevSelectedOptions[subject][questionNo],
    //         ans: updatedAns,
    //       },
    //     },
    //   };
    // });
  };
  const clear = (subject, questionNo, type) => {
    dispatch(clearSelection({subject, questionNo, type}))
    // setSelectedOptions((prevSelectedOptions) => {
    //   let updatedAns;
    //   if (type === "single") {
    //     updatedAns = "";
    //   } else {
    //     updatedAns = [];
    //   }
    //   return {
    //     ...prevSelectedOptions,
    //     [subject]: {
    //       ...prevSelectedOptions[subject],
    //       [questionNo]: {
    //         ...prevSelectedOptions[subject][questionNo],
    //         ans: updatedAns,
    //       },
    //     },
    //   };
    // });
  };
  const reviewNext = (subject, questionNo, type) => {
    dispatch(reviewAndNext({subject, questionNo, type}))
    // setSelectedOptions((prevSelectedOptions) => {
    //   const questionAns = prevSelectedOptions[subject][questionNo].ans;
    //   let updatedAns;
    //   let updatedMark;
    //   if (questionAns.length) {
    //     updatedAns = true;
    //     updatedMark = true;
    //   } else {
    //     updatedAns = false;
    //     updatedMark = true;
    //   }
    //   return {
    //     ...prevSelectedOptions,
    //     [subject]: {
    //       ...prevSelectedOptions[subject],
    //       [questionNo]: {
    //         ...prevSelectedOptions[subject][questionNo],
    //         answered: updatedAns,
    //         marked: updatedMark,
    //       },
    //     },
    //   };
    // });
    // dispatch(
    //   setQuestionDetails({
    //     no: questionNo + 1,
    //     sub: subject,
    //     type: type,
    //   })
    // );
  };
  const saveNext = (subject, questionNo, type,totalSeconds) => {
    dispatch(saveAndNext({subject, questionNo, type,totalSeconds}))
    // setSelectedOptions((prevSelectedOptions) => {
    //   const questionAns = prevSelectedOptions[subject][questionNo].ans;
    //   let updatedAns;
    //   if (questionAns.length) {
    //     updatedAns = true;
    //   } else {
    //     updatedAns = false;
    //   }
    //   return {
    //     ...prevSelectedOptions,
    //     [subject]: {
    //       ...prevSelectedOptions[subject],
    //       [questionNo]: {
    //         ...prevSelectedOptions[subject][questionNo],
    //         answered: updatedAns,
    //         marked: false,
    //         timeTaken:totalSeconds
    //       },
    //     },
    //   };
    // });
    // dispatch(
    //   setQuestionDetails({
    //     no: questionNo + 1,
    //     sub: subject,
    //     type: type,
    //   })
    // );
  };