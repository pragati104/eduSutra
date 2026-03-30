"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isResults: false,
  searchText: "",
  resultsData: null,
  isUser:false,
  bookmark:false,
  bestAnswer:false,
  questionComment:false,
  optionComment:false
};

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    showResults: (state, action) => {
      const { searchText, resultsData } = action.payload;
      state.searchText = searchText;
      state.isResults = !state.isResults;
      state.resultsData = resultsData;
    },
    resultsDataNull: (state, action) => {
      state.isResults = false;
      state.searchText = "";
      state.resultsData = null;
    },
    showUser:(state) => {
      state.isUser = !state.isUser
    },
    showBookmark:(state) => {
      state.bookmark = !state.bookmark
    },
    setBestAnswer : (state) => {
      state.bestAnswer = !state.bestAnswer
    },
    showQuestionComment : (state) => {
      state.questionComment = !state.questionComment
    },
    showOptionComment : (state) => {
      state.optionComment = !state.optionComment
    }
  },
});

export const { showResults, resultsDataNull,showUser,showBookmark ,setBestAnswer,showQuestionComment,showOptionComment} = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
