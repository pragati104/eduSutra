"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

const TipTap = ({ onChange, content }) => {
  const handleChange = (newContent) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Superscript,
      Subscript,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border h-[200px] text-black items-start w-full gap-3 font-medium text-base pt-4 rounded-bl-md rounded-br-md outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className="w-full  mt-4">
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default TipTap;
