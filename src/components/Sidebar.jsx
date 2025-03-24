import React, { useState } from "react";
import { assets } from "../assets/assets";
import useGMNiStore from "../store/useGMNiStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { prevPrompts,setPrevPrompts,onSent,setRecentPrompt,newChat} = useGMNiStore();
  const toggleExtended = () => {
    setExtended(!extended);
  };

  const loadPrompt = async (prompt)=>{
      setRecentPrompt(prompt);
    await onSent(prompt);
  }

  const showNotifications = () => {
    
    toast.error("Sorry! This feature is not available yet", {
     style: {
       background: "#c57ddb",
       color: "white",
     },
     iconTheme: {
      primary: '#c2b4de',
      secondary: '#FFFAEE',
    },
    
    });
  };

  const handleNewChat = () => {
    newChat();
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
        <div
        onClick={handleNewChat}
        className="inline-flex items-center gap-2 bg-gray-200 p-2 rounded-full mb-3 hover:bg-gray-300 cursor-pointer">
          <img src={assets.plus_icon} alt="plus-icon" className="w-3" />
          {extended ? <p>New Chat</p> : ""}
        </div>
        {extended ? (
          <div>
            <p>Recent</p>
            {prevPrompts.map((item, index) => (
               <div
               onClick={() => {
                 loadPrompt(item);
               }}
               key={index}
               className="flex items-center gap-2 bg-gray-200 p-2 rounded-full mb-3 cursor-pointer hover:bg-gray-300">
               <img
                 src={assets.message_icon}
                 alt="message-icon"
                 className="w-6"
               />
               <p className="text-sm">{item.slice(0,15)}...</p>
             </div>
            ))}
           
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div
        onClick={showNotifications}
        className="inline-flex items-center gap-2  p-2 rounded-full mb-2 cursor-pointer hover:bg-gray-200">
          <img src={assets.question_icon} alt="q-icon" className="w-4" />
          {extended ? <p>Help</p> : ""}
        </div>
        <div
        onClick={showNotifications}
         className="inline-flex items-center gap-2  p-2 rounded-full mb-2 cursor-pointer hover:bg-gray-200">
          <img src={assets.history_icon} alt="q-icon" className="w-4" />
          {extended ? <p>Activity</p> : ""}
        </div>
        <div 
        onClick={showNotifications}
        className="inline-flex items-center gap-2 p-2 rounded-full  cursor-pointer hover:bg-gray-200">
          <img src={assets.setting_icon} alt="q-icon" className="w-4" />
          {extended ? <p>Settings</p> : ""}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
