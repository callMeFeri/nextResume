"use client";
import React, { useEffect, createContext, useState, useContext } from "react";

export const AppContext = createContext({});
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;

  const [mode, setMode] = useState("dark");
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const apiUrl = "http://localhost:1337/api/user-info";
  const postUrl = "http://localhost:1337/api/posts";

  useEffect(() => {
    if (!authenticated) {
      localStorage.removeItem("user");
    } else {
      userData.identifier === process.env.NEXT_PUBLIC_
        ? localStorage.setItem("premission", `${process.env.NEXT_PUBLIC_}`)
        : null;
    }
  }, [authenticated, userData]);

  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider
      value={{
        toggle,
        mode,
        setAuthenticated,
        authenticated,
        apiUrl,
        postUrl,
        userData,
      }}
    >
      <div className={`theme ${mode}`}>{children}</div>
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
