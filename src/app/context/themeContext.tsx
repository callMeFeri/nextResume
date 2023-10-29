"use client";
import React from "react";
import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [mode, setMode] = useState("dark");
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider
      value={{ toggle, mode, setAuthenticated, authenticated }}
    >
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
