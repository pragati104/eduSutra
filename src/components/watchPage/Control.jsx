"use client";
import React, { useState } from "react";
import { FaPause } from "react-icons/fa6";
import { HiVolumeUp } from "react-icons/hi";
import { MdVolumeOff } from "react-icons/md";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BsFullscreen } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
 

const Control = ({
  playRateHandler,
  toggleFullScreen,
  onPlayPause,
  playing,
  onRewind,
  onForward,
  played,
  onSeek,
  onSeekMouseUp,
  mute,
  onMute,
  duration,
  currentTime,
  onMouseSeekDown,
  controlRef,
  playbackRate
}) => {
  // console.log("played",played)
  const  rate = [0.5, 0.75, 1.0, 1.25, 1.5,2.0] 
  const quality = ["360p","480p","720p","auto"];
  
  const [showSpeed, setShowSpeed] = useState(false);
  const [showQuality, setShowQuality] = useState(false);

  return (
    <div
      className="absolute top-0  w-full h-full grid grid-rows-3  "
      ref={controlRef}
    >
      <div className="top_container mr-0 w-fit h-fit flex gap-8 px-6 py-3 mx-auto  ">
        <div className="icon__btn text-white cursor-pointer" onClick={onMute}>
          {mute ? <MdVolumeOff size={20} /> : <HiVolumeUp size={20} />}
        </div>
        <div
          className="icon__btn text-white cursor-pointer  "
          onClick={() => setShowSpeed(!showSpeed)}
        >
          <MdOutlineSlowMotionVideo size={20} />
          {showSpeed && (
            <div className="md:text-sm text-xs flex right-3 gap-2 list-none mt-2 absolute bg-white shadow-md rounded-md text-black p-2 z-20">
            {rate.map((r, i) => {
              
              return (
                <li
                  key={i}
                  onClick={() => playRateHandler(r)}
                  className={`border-b p-1 rounded-md hover:bg-gray-100 ${
                    playbackRate === r && "bg-gray-700 text-white"
                  }`}
                >
                  {r}x
                </li>
              );
            })}
          </div>
          
          )}
        </div>
        <div
          className="icon__btn text-white cursor-pointer"
          onClick={() => setShowQuality(!showQuality)}
        >
          <IoSettings size={20} />
          {showQuality && (
            <div className="md:text-sm text-xs flex right-3 gap-2 list-none  mt-2 absolute bg-white shadow-md rounded-md text-black p-2 z-20 ">
               {quality.map((q,ind) => (
                <li
                key={ind}
                onClick={() => playRateHandler(0.5)}
                className="border-b p-1 rounded-md hover:bg-gray-100"
              >
                {q}
              </li>
               ))}
               
            </div>
          )}
        </div>
      </div>
      <div className="mid__container flex gap-8 w-fit m-auto  text-white">
        <div className="icon__btn  " onClick={onRewind}>
          <TbRewindBackward10 size={30} className="cursor-pointer" />
        </div>

        <div className="icon__btn   cursor-pointer" onClick={onPlayPause}>
          {playing ? <FaPause size={30} /> : <FaPlay size={30} />}{" "}
        </div>

        <div className="icon__btn  ">
          <TbRewindForward10
            size={30}
            onClick={onForward}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="bottom__container absolute bottom-2 w-full h-fit m-auto px-3 row-end-4 flex flex-col ">
        <div className="w-full">
          <BsFullscreen
            onClick={() => toggleFullScreen()}
            className="text-white  float-right cursor-pointer"
          />
        </div>
        <div className="slider__container">
          {/* <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp}
            onMouseDown={onMouseSeekDown}
          /> */}
          <input
            id="steps-range"
            type="range"
            min="0"
            max="100"
            value={played * 100}
            onChange={(e) => onSeek(e.target.value)}
            onChangeCommitted={(e) => onSeekMouseUp(e.target.value)}
            onMouseDown={onMouseSeekDown}
            className="w-full h-2 bg-white rounded-lg cursor-pointer "
          ></input>
        </div>
        <div className="flex justify-between">
          <span className="text-white w-full">{currentTime}</span>
          <span className="text-white w-full text-end">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Control;
