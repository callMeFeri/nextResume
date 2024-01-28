"use client";
import React, { FormEvent } from "react";
import Image from "next/image";

import { User } from "@/app/types/types";

import axios from "axios";

import { userNameEdit, TuserNameEdit } from "@/schema/schema";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Page = () => {
  const user = localStorage.getItem("User profile");
  const userData: User = user && JSON.parse(user);
  const userName = userData?.user.username;
  const userEmail = userData?.user.email;
  const userPassword = localStorage.getItem("User password");
  const password = userPassword && JSON.parse(userPassword);

  const [profileEditing, setProfileEditing] = React.useState(false);

  const { register, handleSubmit } = useForm<TuserNameEdit>({
    resolver: zodResolver(userNameEdit),
  });

  const Submit = async (data: TuserNameEdit) => {
    setProfileEditing(false);

    const res = await axios.get("http://localhost:1337/api/users", {
      headers: {
        Authorization: `Bearer ba1caad0331c64d3ac527c7963b838508c227797a22af8b4b67533410c26b4aa8640395e1b299b96538747bc81cb280c98e89f1df41e10f25592bcbac9330b5386bc8f8b7de819ec6fda8a1b2c86ff9f4b019747d5941b8548fd25bed5f47b72d6c1d42895cc9705b3245a1edfafc986eb4d2e114d6f64ed697b2f0694206942`,
      },
    });
    console.log(res);
  };

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
              <div className="w-72 gap-4">
                <form onSubmit={handleSubmit(Submit)}>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input
                      {...register("userName")}
                      type="text"
                      placeholder={`${userName}`}
                      className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                    <button
                      className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                      type="submit"
                    >
                      <Image
                        src="/icons8-done.svg"
                        className="h-3 w-3"
                        width={500}
                        height={500}
                        alt="Done Button"
                      />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                <div> {userName}</div>
                <button
                  className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                  onClick={() => setProfileEditing(!profileEditing)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {userEmail}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
