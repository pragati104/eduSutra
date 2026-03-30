"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReportBlock: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    showReportBlock: (state, action) => {
      state.isReportBlock = !state.isReportBlock;
    },
  },
});

export const { showReportBlock } = userSlice.actions;

export default userSlice.reducer;
