import {
  markRead,
  showNotification,
} from "@/GlobalRedux/Features/notifications";
import { useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Notification = () => {
  const data = useSelector((store) => store.notifications.notificationsData);
  const dispatch = useDispatch();
  const notificationRef = useRef(null);

  const handleMark = () => {
    dispatch(markRead());
  };

  const handleClickOutside = (e) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(e.target)
    ) {
      dispatch(showNotification());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={notificationRef}
      className=" bg-primaryDark text-white   right-6 top-14 cursor-pointer p-2 md:w-[22%] w-[80%] rounded-lg z-20 fixed"
    >
      <div className="w-[90%] m-2  mx-auto">
        <div className="flex justify-between border-b py-1">
          <h2>Notifications</h2>
          <p className="text-sm" onClick={() => handleMark()}>
            Mark All as Read
          </p>
        </div>
        {data.map((each, index) => {
          return (
            <div key={index} className="m-2 py-2 border-b">
              <p className="text-base font-semibold">{each.title}</p>
              <p className="text-sm">{each.content}</p>
              <p className="text-xs my-1 font-medium">{each.timestamp}</p>
            </div>
          );
        })}
        <div className="flex gap-2 items-center justify-center text-sm">
          <MdKeyboardArrowDown size={25} />
          Show All Notifications
        </div>
      </div>
    </div>
  );
};

export default Notification;
