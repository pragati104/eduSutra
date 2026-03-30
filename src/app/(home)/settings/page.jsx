import DeleteAccount from "@/components/settingPage/DeleteAccount";
import UpdateDisplayPicture from "@/components/settingPage/UpdateDisplayPicture";
import UpdatePassword from "@/components/settingPage/UpdatePassword";
import UpdatePersonalDetails from "@/components/settingPage/UpdatePersonalDetails";
import React from "react";

const SettingsPage = () => {
  return (
    <div className=" rounded-lg bg-[#fff]">
      <div className="md:w-[80%] w-[90%] pt-4  mx-auto">
        <UpdateDisplayPicture />
        <UpdatePersonalDetails />
        <UpdatePassword />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default SettingsPage;
