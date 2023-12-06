"use client";
import React, { useEffect } from "react";
import { createContext, useState, useContext } from "react";

export const AppContext = createContext({});
export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const authLogInfo: string | null = localStorage.getItem("auth") || null;
  const [mode, setMode] = useState("dark");
  const [authenticated, setAuthenticated] = React.useState<any>(authLogInfo);

  const apiUrl = "http://localhost:1337/api/user-info";
  const postUrl = "http://localhost:1337/api/posts";

  useEffect(() => {
    if (!authenticated) {
      localStorage.removeItem("auth");
    }
  }, [authenticated]);
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
      }}
    >
      <div className={`theme ${mode}`}>{children}</div>
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
