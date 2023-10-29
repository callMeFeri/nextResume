"use client";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/themeContext";

import React from "react";

function CheckAuth() {
  const { authenticated }: { authenticated: boolean } = useGlobalContext();
  if (authenticated) {
    return (
      <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
        <Link href="/" className="text-yellow-600">
          Add Post
        </Link>
      </li>
    );
  }
}

export default CheckAuth;
