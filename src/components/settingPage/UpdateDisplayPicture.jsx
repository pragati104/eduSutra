"use client";
import { showProfileImage } from "@/GlobalRedux/Features/settings";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import ImageUploadModal from "../common/ImageUploadModal";

const UpdateDisplayPicture = () => {
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const isProfileImage = useSelector((store) => store.settings.isProfileImage);

  const dispatch = useDispatch();
  // when user click select button due to below code open the file picker dialog
  const handleClick = () => {
    fileInputRef.current.click();
    // console.log(fileInputRef);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (("file", file)) {
      setImageFile(file);
      previewFile(file);
    }
  };

  //when we just select image then it will preview in profile image section
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  //upload image to db
  //   const handleFileUpload = () => {
  //     try {
  //       console.log("uploading...");
  //       setLoading(true);
  //       const formData = new FormData();
  //       formData.append("displayPicture", imageFile);
  //       console.log("formdata", formData);
  //       dispatch(updateDisplayPicture(token, formData)).then(() => {
  //         setLoading(false);
  //       });
  //     } catch (error) {
  //       console.log("ERROR MESSAGE - ", error.message);
  //     }
  //   };
  //everytime imageFile data changes call previewFile function to preview image
  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile);
    }
  }, [imageFile]);

  return (
    <>
      <div className="flex items-center justify-between rounded-md border   p-8 md:px-12 px-3  text-black shadow-md">
        <div className="flex items-center gap-x-4">
          <Image
            src="/assests/pragati's-avatar.png"
            width={78}
            height={78} //show user.image or just selected image
            alt={`profile`}
            className="aspect-square  rounded-full object-cover"
          />
          <div className="space-y-2">
            <p className="md:text-lg text-base">Change Profile Picture</p>
            <div className="flex flex-row gap-3">
              <button
                onClick={() => dispatch(showProfileImage())}
                className="flex items-start gap-2 cursor-pointer rounded-md bg-yellow-400 py-2 px-5 font-semibold text-black"
              >
                Upload <FiUpload size={22} />
              </button>

              {isProfileImage && (
                <ImageUploadModal
                  text="Upload"
                  closeModal={() => dispatch(showProfileImage())}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDisplayPicture;
