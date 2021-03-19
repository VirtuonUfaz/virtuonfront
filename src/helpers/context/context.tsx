import { fetchUser } from "helpers/actions/auth";
import { get } from "helpers/server";
import React, { useState, createContext, useEffect } from "react";
import { loginHelpers } from "../actions";

export const VirtuonContext = createContext({
  user: {},
  setUser: (d) => d,
  loginHelpers: {},
});

export const VirtuonProvider = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("FETCHING DATA");
    fetchUser().then((user) => setUser(user));
  }, []);

  return (
    <VirtuonContext.Provider
      value={{
        user,
        setUser,
        loginHelpers,
      }}
    >
      {props.children}
    </VirtuonContext.Provider>
  );
};
