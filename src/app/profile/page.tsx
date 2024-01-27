"use client";
import React from "react";
import Image from "next/image";

import { User } from "@/app/types/types";

const Page = () => {
  const user = localStorage.getItem("User profile");
  const userData: User = user && JSON.parse(user);
  const userName = userData?.user.username;

  const [profileEditing, setProfileEditing] = React.useState(false);

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
            {profileEditing ? (
              <div className="w-72">
                <div className="relative h-10 w-full min-w-[200px] ">
                  <input
                    type="email"
                    placeholder={`${userName}`}
                    className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5  hidden h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
              </div>
            ) : (
              userName
            )}

            <button
              className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
              onClick={() => setProfileEditing(!profileEditing)}
            >
              {profileEditing ? (
                <Image
                  src="/icons8-done.svg"
                  className="h-3 w-3"
                  width={500}
                  height={500}
                  alt="done"
                />
              ) : (
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
              )}
            </button>
          </div>
          {/* <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2014
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
