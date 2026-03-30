"use client";
import React, { useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
const Video = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        player.qualityLevels(); // Enable quality levels
        player.hlsQualitySelector({ displayCurrentQuality: true }); // Enable HLS quality selector
      }));
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default Video;
