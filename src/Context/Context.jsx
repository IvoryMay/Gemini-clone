import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext();

const ContextProvider = ({children}) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const  [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    await run(prompt);
  }
   onSent("what is react?");

  const contextValue ={
    prevPrompts,
    setPrevPrompts,
    recentPrompt,
    setRecentPrompt,
    input,
    setInput,
    showResult,
    loading,
    resultData,
    onSent

  }
  return (
    <Context.Provider value={contextValue}>
      {children}
      </Context.Provider>
  )
}

export default ContextProvider;