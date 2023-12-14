"use client";
import { useGlobalContext } from "@/app/context/AppContext";
import { useRouter } from "next/navigation";

import React from "react";
import { Dispatch } from "react";

function AddPostExitButton() {
  const router = useRouter();
  const premission = localStorage.getItem("premission");

  const {
    setAuthenticated,
    authenticated,
  }: { setAuthenticated?: any; authenticated?: boolean } = useGlobalContext();

  if (authenticated && premission == process.env.NEXT_PUBLIC_) {
    return (
      <li className=" hover:bg-gray-700 text-yellow-600 hover:cursor-pointer hover:text-white rounded-md px-3 py-2 text-sm font-medium">
        <a
          onClick={() => (
            localStorage.removeItem("user"),
            localStorage.removeItem("premission"),
            localStorage.removeItem("nav"),
            setAuthenticated(false),
            router.push("dashboard/login")
          )}
        >
          Exit
        </a>
      </li>
    );
  }
  return;
}

export default AddPostExitButton;
