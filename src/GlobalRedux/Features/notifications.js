"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPdf: false,
  isNotification: false,
  totalNotifications: null,
  notificationsData: [
    {
      id: 1,
      title: "New Python Course!",
      content:
        "Enroll in our latest Python Programming course. Limited seats available!",
      timestamp: "2024-04-16T09:00:00",
      is_read: false,
    },
    {
      id: 2,
      title: "Upgrade to Premium!",
      content:
        "Unlock unlimited access with Premium subscription. Upgrade now!",
      timestamp: "2024-04-15T15:30:00",
      is_read: true,
    },
    {
      id: 3,
      title: "Webinar Invitation",
      content:
        "Join exclusive webinar on Machine Learning Basics. Reserve your spot!",
      timestamp: "2024-04-14T10:00:00",
      is_read: true,
    },
    {
      id: 4,
      title: "Feedback Survey",
      content: "Help us improve! Take our quick survey & win a free course.",
      timestamp: "2024-04-13T12:00:00",
      is_read: false,
    },
  ],
  markRead: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state) => {
      state.isNotification = !state.isNotification;
    },
    showPdf: (state, action) => {
      if (action.payload === undefined) {
        state.isPdf = !state.isPdf;
      } else {
        state.isPdf = action.payload;
      }
  },
    markRead: (state) => {
      state.markRead = !state.markRead;
      state.isNotification = !state.isNotification;
    },
  },
});

export const { showNotification, markRead, showPdf } =
  notificationSlice.actions;

export default notificationSlice.reducer;
