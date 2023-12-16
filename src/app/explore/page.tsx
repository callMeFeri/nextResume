"use client";
import React from "react";
import GetData from "../components/swrFetching/getData";
import { useGlobalContext } from "../context/AppContext";

const ExplorePage = () => {
  const { mode, postUrl }: any = useGlobalContext();
  return (
    <div className="">
      <GetData url={postUrl} mode={mode} />
    </div>
  );
};

export default ExplorePage;
