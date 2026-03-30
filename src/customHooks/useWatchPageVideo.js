import { useState, useEffect } from "react";
const useWatchPageVideo = (videoId) => {
  const [watchPageVideo, setWatchPageVideo] = useState({});

  useEffect(() => {
    const getWatchPageVideo = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}` +
          "&key=" +
          "AIzaSyBAWjcxaSrELGJfGLUPug58r8C7MirPnlg"
      );
      const json = await data.json();
      setWatchPageVideo(json.items[0]);
    };
    getWatchPageVideo();
  }, [videoId]);
  return watchPageVideo;
};

export default useWatchPageVideo;
