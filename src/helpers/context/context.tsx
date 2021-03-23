import { fetchUser } from "helpers/actions/auth";
import { get } from "helpers/server";
import React, { useState, createContext, useEffect } from "react";
import { loginHelpers } from "../actions";

export const VirtuonContext = createContext({
  user: undefined,
  setUser: (d) => d,
  loginHelpers: {},
  loading: true,
});

export const VirtuonProvider = (props) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUser()
      .then((user) => {
        console.log(user);

        if (user !== null && user) {
          setUser(user);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <VirtuonContext.Provider
      value={{
        user,
        setUser,
        loginHelpers,
        loading,
      }}
    >
      {props.children}
    </VirtuonContext.Provider>
  );
};
