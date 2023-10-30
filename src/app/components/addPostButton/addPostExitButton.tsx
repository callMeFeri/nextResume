"use client";
import { useGlobalContext } from "@/app/context/AppContext";
import React from "react";

function AddPostExitButton() {
  const { authenticated, setAuthenticated } = useGlobalContext();

  if (authenticated) {
    return (
      <li className=" hover:bg-gray-700 text-yellow-600 hover:cursor-pointer hover:text-white rounded-md px-3 py-2 text-sm font-medium">
        <a onClick={() => setAuthenticated(false)}>Exit</a>
      </li>
    );
  }
  return;
}

export default AddPostExitButton;
