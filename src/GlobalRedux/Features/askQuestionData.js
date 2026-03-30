import { createSlice } from "@reduxjs/toolkit";
import { IoIosRecording } from "react-icons/io";

const initialState = {
  isImageModal: false,
  askImage: null,
  selected: null,
  myTest:null,
  isRecording: false,
};

const askQuestionSlice = createSlice({
  name: "askQuestion",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isImageModal = !state.isImageModal;
    },
    setAskImage: (state, action) => {
      state.askImage = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setMyTest: (state, action) => {
      state.myTest = action.payload;
    },
    setIsRecording: (state) => {
      state.isRecording = !state.isRecording;
    },

  },
});

export const { showModal, setAskImage,setMyTest, setSelected, setIsRecording } =
  askQuestionSlice.actions;

export default askQuestionSlice.reducer;
