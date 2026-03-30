import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../common/AlertModal";
import { showAlert } from "@/GlobalRedux/Features/settings";

const BlockedUserCard = () => {
  const isAlert = useSelector((store) => store.settings.isAlert);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 bg-white w-fit rounded-lg p-2">
      <div className="flex items-center gap-2    ">
        <FaRegUserCircle size={25} className="text-gray-900" />
        <p className="text-gray-900 font-semibold">Subham kumar</p>
      </div>
      <div>
        <button
          onClick={() => dispatch(showAlert())}
          className="p-2 bg-[#691432] text-white rounded-lg font-medium"
        >
          Unblock
        </button>
        {isAlert && (
          <AlertModal
            message="Are You sure you want to unblock this user?"
            button1="NO"
            button2="YES"
            isAlert={isAlert}
            setAlert={() => dispatch(showAlert())}
          />
        )}
      </div>
    </div>
  );
};

export default BlockedUserCard;
