import { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { AiOutlineRotateRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { canvasPreview } from "./CanvasPreview";
import Image from "next/image";

export default function Crop({ url, setModalImage }) {
  const dispatch = useDispatch();
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({
    unit: "%",
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [completedCrop, setCompletedCrop] = useState();
  const imageUrl = url;

  const onZoom = (e) => {
    setScale(parseFloat(e));
  };

  const rotateRight = () => {
    let newRotation = rotation + 90;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    setRotation(newRotation);
  };

  const download = async () => {
    try {
      const blobUrl = await canvasPreview(
        imgRef.current,
        completedCrop,
        scale,
        rotation
      );

      // console.log(blobUrl);
      setModalImage(blobUrl);
    } catch (error) {
      console.error("Error generating preview:", error);
    }
  };

  const onImageLoad = (e) => {
    setHeight(e?.currentTarget?.height);
    setWidth(e?.currentTarget?.width);
    setCompletedCrop({
      x: 0,
      y: 0,
      height: e?.currentTarget?.height,
      width: e?.currentTarget?.width,
      unit: "%",
    });
  };
  return (
    <div className="m-8 mx-auto">
      <ReactCrop
        className="mx-auto w-f flex justify-center items-center mb-5"
        src={imageUrl}
        crop={crop}
        onChange={(_, percentCrop) => {
          setCrop(percentCrop);
        }}
        onComplete={(e) => {
          if (e?.height == 0 || e?.width == 0) {
            setCompletedCrop({
              x: 0,
              y: 0,
              height: height,
              width: width,
              unit: "%",
            });
          } else {
            setCompletedCrop(e);
          }
        }}
      >
        <div className="w-full h-full">
          <Image
            ref={imgRef}
            crossOrigin="anonymous"
            alt="Error"
            src={imageUrl}
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              transform: `scale(${scale}) rotate(${rotation}deg)`,
            }}
            onLoad={onImageLoad}
            className="mx-auto"
          />
        </div>
      </ReactCrop>
      <div className="flex items-center justify-center gap-5 ">
        <div className="flex h-fit gap-4">
          <input
            type="range"
            min={0.1}
            max={3}
            step={0.05}
            value={scale}
            onInput={(e) => {
              onZoom(e.target.value);
            }}
            className={"slider"}
          ></input>
          <button className={` text-white`} onClick={download}>
            Crop
          </button>
          <AiOutlineRotateRight color="white" size={25} onClick={rotateRight} />
        </div>
      </div>
    </div>
  );
}
