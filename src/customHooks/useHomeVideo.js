"use client";
import { useEffect, useState } from "react";

const useHomeVideo = () => {
  const [homePageVideo, setHomePageVideo] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
          "AIzaSyBAWjcxaSrELGJfGLUPug58r8C7MirPnlg"
      );
      const json = await data.json();
      setHomePageVideo(json.items);
    };

    getVideos();
  }, []);

  return homePageVideo;
};

export default useHomeVideo;
