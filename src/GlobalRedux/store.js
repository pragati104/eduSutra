"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import askQuestionDataReducer from "./Features/askQuestionData";
import chatSliceReducer from "./Features/chatSlice";
import dropDownReducer from "./Features/dropDown";
import navbarReducer from "./Features/navbar";
import notificationsReducer from "./Features/notifications";
import searchResultsReducer from "./Features/searchResults";
import settingsReducer from "./Features/settings";
import testSlice from "./Features/testSlice";
import toggleSidebarReducer from "./Features/toogleSidebarSlice";
import upcomingClass from "./Features/upcomingClass";
import userSlice from "./Features/userSlice";

const rootReducer = combineReducers({
  toggleSidebar: toggleSidebarReducer,
  dropDown: dropDownReducer,
  notifications: notificationsReducer,
  navbar: navbarReducer,
  askQuestion: askQuestionDataReducer,
  searchResults: searchResultsReducer,
  chat: chatSliceReducer,
  settings: settingsReducer,
  user: userSlice,
  test: testSlice,
  UpcomingClass: upcomingClass,
});

export const store = configureStore({
  reducer: rootReducer,
});
