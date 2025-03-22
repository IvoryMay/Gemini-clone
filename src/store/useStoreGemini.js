import { create } from "zustand";
import run from "../config/gemini";

const useStoreGemini = create((set) => ({
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

  onSent: async (input) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
   const response = await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  },
}));

export default useStoreGemini;
