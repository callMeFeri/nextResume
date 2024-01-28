import React from "react";
import ExploreDataValidator from "../validateData/exploreDataValidator";
import GetDataFetcher from "./getDataFetcher";

import _ from "lodash";

import type { Post } from "@/app/types/types";
function GetData({ url, mode }: { url: string; mode: string }) {
  const {
    data,
    error,
    isLoading,
  }: { data: { data: Post }; error: string; isLoading: boolean } =
    GetDataFetcher(url);

  if (error) {
    return (
      <div className="pt-20 text-center min-h-[900px]">
        Failed to load the data
        <br />
        Check your internet connection
        <br />
        Please try again in a few moments
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen min-h-screen">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>

          <div>Loading ...</div>
        </div>
      </div>
    );
  }
  const randomData = _.shuffle(data.data);
  console.log("data", randomData);
  return (
    <div className="container pt-20 pl-[15%] min-h-screen text-center">
      <div className="flex gap-10 ">
        <ExploreDataValidator item={randomData} mode={mode} />
      </div>
    </div>
  );
}

export default GetData;
