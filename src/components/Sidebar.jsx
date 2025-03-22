import React, { useState } from "react";
import { assets } from "../assets/assets";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const toggleExtended = () => {
    setExtended(!extended);
  };
  return (
    <section className="hidden sm:inline-flex flex-col justify-between  min-h-screen min-w-[180px] m-4 p-4 bg-gray-100 font-serif rounded-md ">
      <div>
        <img
          onClick={toggleExtended}
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-6 mb-3 cursor-pointer"
        />
        <div className="inline-flex items-center gap-2 bg-gray-200 p-2 rounded-full mb-3 hover:bg-gray-300 cursor-pointer">
          <img src={assets.plus_icon} alt="plus-icon" className="w-3" />
          {extended ? <p>New Chat</p> : ""}
        </div>
        {extended ? (
          <div>
            <p>Recent</p>
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-full mb-3 cursor-pointer hover:bg-gray-300">
              <img
                src={assets.message_icon}
                alt="message-icon"
                className="w-6"
              />
              <p>What is react...</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2  p-2 rounded-full mb-2 cursor-pointer hover:bg-gray-200">
          <img src={assets.question_icon} alt="q-icon" className="w-4" />
          {extended ? <p>Help</p> : ""}
        </div>
        <div className="inline-flex items-center gap-2  p-2 rounded-full mb-2 cursor-pointer hover:bg-gray-200">
          <img src={assets.history_icon} alt="q-icon" className="w-4" />
          {extended ? <p>Activity</p> : ""}
        </div>
        <div className="inline-flex items-center gap-2 p-2 rounded-full  cursor-pointer hover:bg-gray-200">
          <img src={assets.setting_icon} alt="q-icon" className="w-4" />
          {extended ? <p>Settings</p> : ""}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
