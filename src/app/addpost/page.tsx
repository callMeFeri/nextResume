"use client";
import React from "react";

import { useGlobalContext } from "../context/AppContext";

import AddPost from "../components/addPost/addPost";

function page() {
  const { authenticated }: { authenticated: any } = useGlobalContext();
  if (authenticated) {
    return (
      <div className="pt-20 min-h-[900px] text-center ">
        <h1 className="text-6xl  bg-gradient-to-b from-green-800 to-blue-300 bg-clip-text text-transparent pb-10">
          Please Share Your Memory Here!
        </h1>
        <AddPost />
      </div>
    );
  } else {
    return <div className="pt-20">Siktir</div>;
  }
}

export default page;
