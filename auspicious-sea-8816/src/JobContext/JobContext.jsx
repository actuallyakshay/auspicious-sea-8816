import { useReducer } from "react";
import { createContext } from "react";

import reducer from "./Reducer";

export const JobContext = createContext();

export default function JobContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
    token: null,
    data: [],
    isLoading: false,
    isError: false,
    singleJobData: {},
    saveData: [],
    personalinfo: {},
    exp : "",
  });

  return (
    <JobContext.Provider value={{ state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
}
