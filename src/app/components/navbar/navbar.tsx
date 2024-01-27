"use client";
import Link from "next/link";
import React from "react";

import DarkModeToggle from "../darkModeToggle/darkModeToggle";
import AddPostExitButton from "../addPostButton/addPostExitButton";
import CheckAuth from "../checkAuth/checkAuth";
import { useGlobalContext } from "@/app/context/AppContext";
import { User } from "@/app/types/types";

function Navbar() {
  const { authenticated }: { authenticated?: boolean } = useGlobalContext();

  const user = localStorage.getItem("User profile");
  const userData: User = user && JSON.parse(user);
  const userName = userData?.user.username;

  const links = CheckAuth(authenticated as boolean);

  return (
    <div className="top-0 w-full">
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <ul className="flex items-center space-x-4">
                  {links.map(
                    (link: { title: string; id: number; url: string }) => {
                      const { title, id, url } = link;
                      return (
                        <li
                          key={id}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 lg:text-sm sm:text-xs"
                        >
                          <Link href={url} className="text-yellow-600">
                            {title}
                          </Link>
                        </li>
                      );
                    }
                  )}
                  <AddPostExitButton />
                  <DarkModeToggle />
                  {authenticated && (
                    <div className="flex items-center">
                      <li className="text-gray-300 hover:text-white hover:cursor-no-drop rounded-md px-3 py-2 lg:text-lg sm:text-xs">
                        Wellcome {userName}❤️
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
