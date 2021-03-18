import React, { useState, createContext } from "react";
import {loginHelpers} from "../actions"


export const VirtuonContext = createContext({
  user: {},
  setUser: d => d,
  loginHelpers: {}
});


export const VirtuonProvider = props => {
  const [user, setUser] = useState({});
  
  return (
    <VirtuonContext.Provider value={{
      user, setUser, loginHelpers
    }}>
      {props.children}
    </VirtuonContext.Provider>
  );
};
