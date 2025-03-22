import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import run from '../config/gemini';
import SkeletonLoader from './SkeletonLoader';


const Main = () => {

  const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const  [resultData, setResultData] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    onSent(input);
  };
 const onSent = async (input) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
   const response = await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  }

  return (
    <section className='container  flex flex-col relative m-4 p-4 font-serif min-h-screen'>
      <nav className='flex items-center justify-between mb-10'>
        <p className='font-semibold text-2xl text-gray-500'>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" className='w-9 rounded-full' />
      </nav>
      

       

       {showResult ?
       (<div className='max-h-[70vh] overflow-y-scroll hide-scrollbar'>
          <div className='flex items-center gap-4 mb-4'>
            <img src={assets.user_icon} alt="user" className='w-9 rounded-full' />
            <p>{recentPrompt}</p>
          </div>
          
          <div className='flex items-start gap-4'>
            <img src={assets.gemini_icon} alt="gemini_icon" className='w-9' />
          {loading ? <SkeletonLoader /> : <p >{resultData}</p>}
            
          </div>
       </div>) 
       :(<div className='mx-auto w-3/4 flex-grow'>
       {/* hello section */}
      <div className='mt-18'>
        <p className='text-[40px]  bg-gradient-to-r from-blue-400 via-purple-400 via-40% to-pink-600 bg-clip-text text-transparent text-4xl font-bold'>Hello, Dev.</p>
        <p className='text-[40px] font-semibold text-gray-400'>How can I help you today?</p>
      </div>

    {/* card section */}
    <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
      <div className='p-4 rounded-md relative bg-gray-200 hover:bg-gray-300 cursor-pointer'>
        <p>Suggest beautiful places to see on an upcoming road trip</p>
        <img src={assets.compass_icon} alt="icon" className='absolute bottom-1 right-1 w-5' />
      </div>

      <div className='p-4 rounded-md relative bg-gray-200 hover:bg-gray-300 cursor-pointer'>
        <p>Briefly summarize this concept: urban planning</p>
        <img src={assets.bulb_icon} alt="icon" className='absolute bottom-1 right-1 w-5' />
      </div>

      <div className='p-4 rounded-md relative bg-gray-200 hover:bg-gray-300 cursor-pointer'>
        <p>Improve the readability of the following code</p>
        <img src={assets.code_icon} alt="icon" className='absolute bottom-1 right-1 w-7' />
      </div>

      <div className='p-4 rounded-md relative bg-gray-200 hover:bg-gray-300 cursor-pointer'>
        <p>Brainstorm team bonding activities for our work retreat</p>
        <img src={assets.message_icon} alt="icon" className='absolute bottom-1 right-1 w-5' />
      </div>
    </div>




    </div>) }
      


    {/* input section */}
   
    <div className='mx-auto mt-auto '>
    <div className='relative mb-3 '>
      <input
      onChange={handleInput}
      value={input}
      type="text" placeholder="Enter a prompt here..." className=" mt-10 p-4 rounded-full bg-gray-200 w-full" />
      <div className='flex items-center gap-2 absolute bottom-4 right-2'>
        <img src={assets.gallery_icon} alt="" className=' w-5 cursor-pointer' />
        <img src={assets.mic_icon} alt="" className='w-5 cursor-pointer' />
        <img
        onClick={handleSend}
        src={assets.send_icon} alt="" className='w-5 cursor-pointer'/>
      </div>
    </div> 
    <p className='text-sm text-gray-400 text-center'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy is important. </p>
    </div>


    
    </section>
  )
}

export default Main