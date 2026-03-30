"use client";
import { formatTime } from "@/utils/Format";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import Control from "./Control";

let count = 0;
function VideoPlayer() {
  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    buffer: true,
  });
  const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    videoState;
  const toggleFullScreen = () => {
    const player = videoPlayerRef.current.getInternalPlayer();
    if (player) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        player.requestFullscreen();
      }
    }
  };

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";
  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);
  // console.log(currentTime,formatCurrentTime,"for")
  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };
  const playRateHandler = (rate) => {
    setVideoState({ ...videoState, playbackRate: rate });
  };
  const rewindHandler = () => {
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 10);
  };
  const handleFastFoward = () => {
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
  };
  const muteHandler = () => {
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const progressHandler = (state) => {
    if (!seeking) {
      // Update the played state based on the progress received from the video player
      setVideoState({ ...videoState, ...state, played: state.played });
    }
  };

  const seekHandler = (value) => {
    // console.log("value",value)
    setVideoState({ ...videoState, played: parseFloat(value / 100) });
    videoPlayerRef.current.seekTo(parseFloat(value / 100));
  };

  const seekMouseUpHandler = (value) => {
    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current.seekTo(value / 100);
  };

  const onSeekMouseDownHandler = (e) => {
    setVideoState({ ...videoState, seeking: true });
  };
  const mouseMoveHandler = () => {
    controlRef.current.style.visibility = "visible";
    count = 0;
  };
  const bufferStartHandler = () => {
    console.log("Bufering.......");
    setVideoState({ ...videoState, buffer: true });
  };
  const bufferEndHandler = () => {
    console.log("buffering stoped ,,,,,,play");
    setVideoState({ ...videoState, buffer: false });
  };

  return (
    <div className="video_container flex flex-col justify-center items-center w-full">
      <div
        className="player__wrapper relative md:w-[810px] md:h-[455px] w-[370px] h-[210px]"
        onMouseMove={mouseMoveHandler}
      >
        <ReactPlayer
          ref={videoPlayerRef}
          className="player absolute"
          url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
          width="100%"
          height="100%"
          playing={playing}
          volume={volume}
          muted={muted}
          onProgress={progressHandler}
          onBuffer={bufferStartHandler}
          onBufferEnd={bufferEndHandler}
          playbackRate={playbackRate}
        />

        {buffer && <p>Loading</p>}

        <Control
          controlRef={controlRef}
          onPlayPause={playPauseHandler}
          playing={playing}
          onRewind={rewindHandler}
          onForward={handleFastFoward}
          played={played}
          onSeek={seekHandler}
          onSeekMouseUp={seekMouseUpHandler}
          mute={muted}
          onMute={muteHandler}
          playRate={playbackRate}
          duration={formatDuration}
          currentTime={formatCurrentTime}
          onMouseSeekDown={onSeekMouseDownHandler}
          toggleFullScreen={toggleFullScreen}
          playRateHandler={playRateHandler}
          playbackRate={playbackRate}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
