import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChatMessage from "./ChatMessage";
import { addMessage } from "@/GlobalRedux/Features/chatSlice";
import {
  generateRandomName,
  makeRandomMessage,
} from "@/utils/SubjectDropHandler";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const LiveChat = () => {
  const [liveMessgae, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const ChatData = useSelector((store) => store.chat.messages);

  //Api polling in interval of 2 seconds
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("Api polling");
      //here we can call api and save in redux store using dispatch like below one

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 5000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="md:my-5 my-2  py-2">
      <div className=" ">
        <div className=" h-[500px] w-full p-2 border border-b-0 border-gray-300  rounded-t-lg overflow-y-scroll flex flex-col-reverse no-scrollbar">
          {ChatData.map((c, i) => {
            return <ChatMessage key={i} name={c.name} message={c.message} />;
          })}
        </div>
      </div>
      <form
        className="p-2 rounded-b-lg  border-t-0  border border-solid border-gray-300"
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(liveMessgae);
          dispatch(
            addMessage({
              name: "subham",
              message: liveMessgae,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="flex justify-between items-center">
          <input
            className="w-[80%]  p-2"
            type="text"
            placeholder="Chat..."
            value={liveMessgae}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="p-2 flex gap-2 justify-evenly items-center rounded-lg w-[20%] bg-green-200">
            Submit
            <MdKeyboardDoubleArrowRight size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
