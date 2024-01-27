"use client";
import React from "react";
import Image from "next/image";

import { User } from "@/app/types/types";

const Page = () => {
  const user = localStorage.getItem("User profile");
  const userData: User = user && JSON.parse(user);
  const userName = userData?.user.username;
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex items-center gap-4 ">
        <div className="flex ">
          <Image
            className="w-20 h-20 rounded-full"
            src="/image-from-rawpixel-id-6039392-jpeg.jpg"
            alt="Profile Image"
            width={500}
            height={500}
          />
        </div>
        <div className="font-medium dark:text-white">
          <div className="flex flex-row gap-3 text-lg">
            {userName}

            <button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </div>
          {/* <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2014
        </div> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
