"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const toggleSidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.show = !state.show;
    },
  },
});

export const { showSidebar } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;
