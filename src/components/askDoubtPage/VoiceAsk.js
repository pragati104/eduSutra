"use client";
import React from "react";
import Lottie from "lottie-react";
import voice from "@/Data/voice.json";
import LanguageDropDown from "./LanguageDropDown";
import Microphone from "../speechToText/Microphone";

const VoiceAsk = () => {
  return (
    <div className="w-full relative">
      <div className="flex flex-col justify-center items-center   gap-4">
        <div className="w-full flex items-center  md:justify-start justify-center">
          <LanguageDropDown />
          <Lottie animationData={voice} className="md:w-[10%] w-[20%] h-20 cursor-pointer" />
        </div>

        {/* <VoiceRecog /> */}
        {/* <VoiceRecognition /> */}
        {/* <Microphone /> */}
      </div>
    </div>
  );
};

export default VoiceAsk;
