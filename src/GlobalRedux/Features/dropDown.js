"use client";

import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  drop: false,
  subjectName: null,
  chaptersData: null,
  chapterName: null,
  dropDownType: null,
  year: null,
};

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    showDropDown: (state, action) => {
      state.drop = !state.drop;
      state.dropDownType = action.payload;
    },
    setSubjectName: (state, action) => {
      state.subjectName = action.payload;
    },
    setChaptersData: (state, action) => {
      state.chaptersData = action.payload;
    },
    setChapterName: (state, action) => {
      state.chapterName = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    allNull: (state) => {
      state.subjectName = null;
      state.chaptersData = null;
      state.chapterName = null;
    },
  },
});

export const {
  showDropDown,
  setSubjectName,
  setChaptersData,
  setChapterName,
  setYear,
  allNull,
} = dropDownSlice.actions;

export default dropDownSlice.reducer;
