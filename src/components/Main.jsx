import React, { useState } from "react";
import { assets } from "../assets/assets";
import useGMNiStore from "../store/useGMNiStore";
import SkeletonLoader from "./SkeletonLoader";

const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
    setResultData,
    onSent,
  } = useGMNiStore();

  

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    onSent(input);
  };
  

  return (
    <section className="container  flex flex-col relative m-4 p-4 font-serif min-h-screen">
      <nav className="flex items-center justify-between mb-10">
        <p className="font-semibold text-2xl text-gray-500">Gemini</p>
        <img
          src={assets.my_ai_photo}
          alt="user-icon"
          className="w-9 rounded-full"
        />
      </nav>

      {showResult ? (
        <div className="max-h-[70vh] overflow-y-scroll hide-scrollbar">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={assets.my_ai_photo}
              alt="user"
              className="w-9 rounded-full"
            />
            <p className="text-gray-700  text-lg">{recentPrompt}</p>
          </div>

          <div className="flex items-start gap-4">
            <img src={assets.gemini_icon} alt="gemini_icon" className="w-9" />
            {loading ? (
              (<SkeletonLoader/>)
            ) : (
              <p
                dangerouslySetInnerHTML={{ __html: resultData }}
                className="text-gray-700 leading-loose "
              ></p>
            )}
          </div>
        </div>
      ) : (
        <div className="mx-auto w-3/4 flex-grow">
          {/* hello section */}
          <div className="mt-18">
            <p className="text-[40px]  bg-gradient-to-r from-blue-400 via-purple-400 via-40% to-pink-600 bg-clip-text text-transparent text-4xl font-bold">
              Hello, Dev.
            </p>
            <p className="text-[40px] font-semibold text-gray-400">
              How can I help you today?
            </p>
          </div>

          {/* card section */}
          <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mb-4">
            <div className="p-4 rounded-md relative bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img
                src={assets.compass_icon}
                alt="icon"
                className="absolute bottom-1 right-1 w-5"
              />
            </div>

            <div className="p-4 rounded-md relative bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <p>Briefly summarize this concept: urban planning</p>
              <img
                src={assets.bulb_icon}
                alt="icon"
                className="absolute bottom-1 right-1 w-5"
              />
            </div>

            <div className="p-4 rounded-md relative bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <p>Improve the readability of the following code</p>
              <img
                src={assets.code_icon}
                alt="icon"
                className="absolute bottom-1 right-1 w-7"
              />
            </div>

            <div className="p-4 rounded-md relative bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img
                src={assets.message_icon}
                alt="icon"
                className="absolute bottom-1 right-1 w-5"
              />
            </div>
          </div>
        </div>
      )}

      {/* input section */}

      <div className="mx-auto mt-auto  ">
      <div className=" mx-auto mb-3">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-3 pointer-events-none">
        <span>+</span>
      </div>
      <input
       onChange={handleInput}
       value={input}
       

      type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Enter a prompt here..."  />
      <div  className="text-white absolute end-2.5 bottom-2.5 bg-gray-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
        <div className="flex items-center gap-2 ">
            <img
              src={assets.gallery_icon}
              alt=""
              className=" w-5 cursor-pointer"
            />
            <img src={assets.mic_icon} alt="" className="w-5 cursor-pointer" />
            <img
              onClick={handleSend}
              src={assets.send_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div></div>
    </div>
  </div>
        <p className="text-sm text-gray-400 text-center">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy is important.
        </p>
      </div>

      

    </section>
  );
};

export default Main;
