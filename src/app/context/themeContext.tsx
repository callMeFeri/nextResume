"use client";

import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext<unknown>();
export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
