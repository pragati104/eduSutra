"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headingData: "",
  open: false,
  isOpen: false,
  isAlertLogout: false,
  courseName: "Course",
  animationTrigger: false,
  selected: null,
  dir: null,
  user: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setHeadingData: (state, action) => {
      state.headingData = action.payload;
    },
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
      state.open = false;
    },
    setOpen: (state) => {
      state.open = !state.open;
    },
    setAlertLogout: (state) => {
      state.isAlertLogout = !state.isAlertLogout;
    },
    setCourseName: (state, action) => {
      state.courseName = action.payload;
    },
    setAnimationTrigger: (state, action) => {
      state.animationTrigger = action.payload;
    },
    setSelected: (state, action) => {
      console.log("Action", action);
      state.selected = action.payload;
    },
    setDir: (state, action) => {
      state.dir = action.payload;
    },
    setUser: (state) => {
      state.user = !state.user;
    },
  },
});

export const {
  setHeadingData,
  setIsOpen,
  setOpen,
  setAlertLogout,
  setCourseName,
  setAnimationTrigger,
  setSelected,
  setDir,
  setUser,
} = navbarSlice.actions;

export default navbarSlice.reducer;
