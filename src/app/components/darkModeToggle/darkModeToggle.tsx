"use client";
import React from "react";
import { useGlobalContext } from "@/app/context/AppContext";

function DarkModeToggle() {
  const context = useGlobalContext();
  const { toggle, mode }: any = context;

  return (
    <div
      className="w-[50px] h-[24px] border-solid border border-green rounded-3xl d-flex justify-between p-[2px] items-center flex flex-row relative"
      onClick={toggle}
    >
      <div
        className="w-[19px] h-[19px] bg-black border rounded-full absolute cursor-pointer"
        style={mode === "dark" ? { right: "2px" } : { left: "2px" }}
      ></div>
      <div>🌙</div>
      <div>☀️</div>
    </div>
  );
}

export default DarkModeToggle;
