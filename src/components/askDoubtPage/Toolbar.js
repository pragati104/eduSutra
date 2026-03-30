"use client";
import React, { useCallback, useState, forwardRef } from "react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Heading1,
  Heading4,
  Superscript,
  Subscript,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ImageUp,
  Heading2,
  Heading3,
  Link,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "@/GlobalRedux/Features/askQuestionData";
import ImageUploadModal from "../common/ImageUploadModal";

const Props = {
  editor: null,
  content: "",
};

const Toolbar = ({ editor, content }) => {
  const dispatch = useDispatch();
  const { isImageModal, askImage } = useSelector((store) => store.askQuestion);
  const [isImg, setIsImg] = useState(null);
  const addImage = useCallback(() => {
    dispatch(showModal());
    if (isImg) {
      editor.chain().focus().setImage({ src: url }).run();
      setIsImg(isImg);
    }
  }, [editor]);

  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
  gap-5 w-full border  "
    >
      <div className="flex justify-start items-center gap-5 w-full flex-wrap ">
        {editor && (
          <>
            {" "}
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleBold().run();
              }}
              className={
                editor.isActive("bold")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Bold className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleItalic().run();
              }}
              className={
                editor.isActive("italic")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Italic className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleUnderline().run();
              }}
              className={
                editor.isActive("underline")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Underline className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleStrike().run();
              }}
              className={
                editor.isActive("strike")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Strikethrough className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleHeading({ level: 1 }).run();
              }}
              className={
                editor.isActive("heading", { level: 1 })
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Heading1 className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleHeading({ level: 2 }).run();
              }}
              className={
                editor.isActive("heading", { level: 2 })
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Heading2 className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleHeading({ level: 3 }).run();
              }}
              className={
                editor.isActive("heading", { level: 3 })
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Heading3 className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleHeading({ level: 4 }).run();
              }}
              className={
                editor.isActive("heading", { level: 4 })
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Heading4 className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleBulletList().run();
              }}
              className={
                editor.isActive("bulletList")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleOrderedList().run();
              }}
              className={
                editor.isActive("orderedList")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <ListOrdered className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleBlockquote().run();
              }}
              className={
                editor.isActive("blockquote")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Quote className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setCode().run();
              }}
              className={
                editor.isActive("code")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400"
              }
            >
              <Code className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().undo().run();
              }}
              className={
                editor.isActive("undo")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <Undo className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().redo().run();
              }}
              className={
                editor.isActive("redo")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <Redo className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleSuperscript().run();
              }}
              className={
                editor.isActive("superscript")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <Superscript className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().toggleSubscript().run();
              }}
              className={
                editor.isActive("subscript")
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <Subscript className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setTextAlign("left").run();
              }}
              className={
                editor.isActive({ textAlign: "left" })
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <AlignLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setTextAlign("center").run();
              }}
              className={
                editor.isActive({ textAlign: "center" })
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <AlignCenter className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setTextAlign("right").run();
              }}
              className={
                editor.isActive({ textAlign: "right" })
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <AlignRight className="w-5 h-5" />
            </button>
            {/* <button
              // onClick={addImage}
              className={
                isImg
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <Link className="w-5 h-5" />
            </button> */}
            <button
              onClick={addImage}
              className={
                isImg
                  ? "bg-sky-700 text-white p-2 rounded-lg"
                  : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
              }
            >
              <ImageUp className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
      {isImageModal && (
        <ImageUploadModal
          setIsImg={setIsImg}
          closeModal={() => dispatch(showModal())}
          text="Upload"
        />
      )}
    </div>
  );
};

export default Toolbar;
