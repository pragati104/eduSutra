"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProfileImage: false,
  isBlocked:false,
  isAlert:false
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    showProfileImage: (state) => {
      state.isProfileImage  = !state.isProfileImage
    },  
    showBlocked: (state) => {
      state.isBlocked  = !state.isBlocked
    },  
    showAlert: (state) => {
      state.isAlert  = !state.isAlert
    },  
  },
});

export const { showProfileImage,showBlocked,showAlert } = settingsSlice.actions;

export default settingsSlice.reducer;
