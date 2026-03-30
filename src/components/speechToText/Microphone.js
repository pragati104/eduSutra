"use client";

import { useRecordVoice } from "@/customHooks/useRecordVoice";
import { FaMicrophone } from "react-icons/fa";

const Microphone = () => {
  const { startRecording, stopRecording, text } = useRecordVoice();

  return (
    // Button for starting and stopping voice recording
    <>
      {" "}
      <button
        onMouseDown={startRecording} // Start recording when mouse is pressed
        onMouseUp={stopRecording} // Stop recording when mouse is released
        onTouchStart={startRecording} // Start recording when touch begins on a touch device
        onTouchEnd={stopRecording} // Stop recording when touch ends on a touch device
        className="border-none bg-transparent w-10"
      >
        {/* Microphone icon component */}
        <FaMicrophone />
      </button>
      <p>{text}</p>
    </>
  );
};

export default Microphone;
