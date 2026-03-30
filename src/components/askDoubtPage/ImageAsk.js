"use client";
import { showModal } from "@/GlobalRedux/Features/askQuestionData";
import { LuScan } from "react-icons/lu";
import { MdBrowserUpdated } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ImageUploadModal from "../common/ImageUploadModal";

const ImageAsk = () => {
  const dispatch = useDispatch();
  const isImageModal = useSelector((store) => store.askQuestion.isImageModal);
  return (
    <div className="w-full ">
      <div className="md:hidden block my-2">
        <p className="my-2 text-center">
          Scan Photo and capture a particular question.
        </p>
        <button className="w-full flex justify-center items-center gap-2 rounded-2xl border-2 border-dashed border-fuchsia-400 bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_red] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          <LuScan size={20} />
          Scan Photo
        </button>
      </div>
      <div className="my-2">
        <p className="my-2 text-center">
          Upload a photo from your gallery and select a question.
        </p>
        <button
          onClick={() => dispatch(showModal())}
          className="w-full justify-center flex items-center gap-2 rounded-2xl border-2 border-dashed border-primaryLight bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_red] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
        >
          <MdBrowserUpdated size={20} />
          Browse Photo
        </button>
      </div>

      {/* <ClickPic/> */}

      {isImageModal && (
        <ImageUploadModal
          closeModal={() => dispatch(showModal())}
          text="Search"
        />
      )}
    </div>
  );
};

export default ImageAsk;
