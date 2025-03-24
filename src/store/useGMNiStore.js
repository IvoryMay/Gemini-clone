import { create } from "zustand";
import run from "../config/gemini";

const useGMNiStore = create((set) => ({
  input: "",
  setInput: (value) => set({ input: value }),

  recentPrompt: "",
  setRecentPrompt: (value) => set({ recentPrompt: value }),

  prevPrompts: [],
  setPrevPrompts: (value) => set({ prevPrompts: value }),

  showResult: false,
  setShowResult: (value) => set({ showResult: value }),

  loading: false,
  setLoading: (value) => set({ loading: value }),

  resultData: "",
  setResultData: (value) => set({ resultData: value }),


  delayParagraph: (index, newWord) => {
    setTimeout(() => {
      set((state) => ({
        resultData: state.resultData + newWord
      }));
    }, index * 75);
  },

  newChat: ()=>{
    set((state) => ({ showResult: false })); 
    set((state) => ({ loading: false }));
    
  },
  
  onSent: async (prompt) => {
  set((state) => ({ resultData: "" })); // Reset resultData
  set((state) => ({ loading: true }));
  set((state) => ({ showResult: true }));
  // let response;
  // if(prompt !== undefined){
  //   response = await run(prompt);
  //   set((state) => ({ recentPrompt: prompt }));

  // }else{
  //   set((state) => ({ prevPrompts: [...state.prevPrompts, input] }));
  //   set((state) => ({ recentPrompt: input }));
  //    response = await run(input);
  // }
  set((state) => ({ recentPrompt: prompt }));
  set((state) => ({
    prevPrompts: state.prevPrompts.includes(prompt)
      ? state.prevPrompts
      : [...state.prevPrompts, prompt],
  }));
  // set((state) => ({ prevPrompts: [...state.prevPrompts, prompt] }));

  const response = await run(prompt);
  let responseArray = response.split("**");
  let newResponse = "";
  
  for (let i = 0; i < responseArray.length; i++) {
    if (i === 0 || i % 2 !== 1) {
      newResponse += responseArray[i];
    } else {
      newResponse += "<b>" + responseArray[i] + "</b>";
    }
  }
  
  let newResponse2 = newResponse.split("*").join("<br/>");
  let newResponseArray = newResponse2.split(" ");

  // Use the delayParagraph function
  newResponseArray.map((arr, index) => {
    useGMNiStore.getState().delayParagraph(index, arr + " ");
  });

  set((state) => ({ loading: false }));
  set((state) => ({ input: "" }));
}
}));

export default useGMNiStore  ;
