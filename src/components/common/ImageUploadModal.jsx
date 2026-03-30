import Crop from "@/components/ImageCrop/Crop";
import { setAskImage } from "@/GlobalRedux/Features/askQuestionData";
import { useRef, useState } from "react";
import { SlCloudUpload } from "react-icons/sl";
import { useDispatch } from "react-redux";

const ImageUploadModal = ({ closeModal, setIsImg, text }) => {
  const [modalImage, setModalImage] = useState(null);
  const hiddenFileInput = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    const objectUrl = URL.createObjectURL(fileUploaded);
    setModalImage(objectUrl);
  };

  const handleSave = () => {
    if (setIsImg) {
      setIsImg(modalImage);
    }
    dispatch(setAskImage(modalImage));
    closeModal();
  };

  return (
    <div>
      <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-70  backdrop-blur-none">
        <div className="md:w-[60%] w-[90%] h-[95%]  rounded-lg border p-6 bg-[#000814]">
          <div className="flex w-full h-[90%] my-2 ">
            <div className="border border-[#424854] border-dotted w-[97%] h-full mx-auto mb-2 flex flex-col items-center justify-center">
              <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
              <p className="text-white mx-auto lg:text-xl text-l font-bold flex items-center justify-center">
                Upload Image or Drag and Drop
              </p>

              {modalImage ? (
                <Crop url={modalImage} setModalImage={setModalImage} />
              ) : (
                <SlCloudUpload
                  size={150}
                  className="text-white mx-auto"
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
          <div className="flex flex-row-reverse items-center gap-x-4">
            <button
              className="text-[#340019] w-full flex justify-center items-center gap-2 text-xl   bg-[#FFD60A] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg   px-5 py-2.5 me-2 mb-2"
              onClick={handleSave}
            >
              {text}
            </button>
            <button
              className="text-white w-full flex justify-center items-center gap-2 text-xl bg-[#161D29] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg   px-5 py-2.5 me-2 mb-2  "
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
