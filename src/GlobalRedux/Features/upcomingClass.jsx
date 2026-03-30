import { createSlice } from "@reduxjs/toolkit";

const upcomingClassSLice = createSlice({
  name: "upcomingClass",
  initialState: {
    day: "Mon",
  },
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;
    },
  },
});

export default upcomingClassSLice.reducer;
export const { setDay } = upcomingClassSLice.actions;
