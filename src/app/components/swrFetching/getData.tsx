import React, { useState } from "react";

import ExploreDataValidator from "../validateData/exploreDataValidator";

import _ from "lodash";

import GetDataFetcher from "./getDataFetcher";

function GetData({ url, mode }: { url: string; mode: string }) {
  // const [refresh, setRefresh] = React.useState<number>(0);

  const { data, error, isLoading } = GetDataFetcher(url);

  if (error)
    return (
      <div className="pt-20 text-center min-h-[900px]">
        Failed to load the data
        <br />
        Check your internet connection
        <br />
        Please try again in a few moments
      </div>
    );
  if (isLoading)
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
              fill-rule="evenodd"
            />
          </svg>

          <div>Loading ...</div>
        </div>
      </div>
    );

  // Randomly select and slice the data to display
  const randomData = _.shuffle(data.data).slice(0, 3);

  let item;
  return (
    <div className="container pt-20 pl-[15%] min-h-screen text-center">
      <br />
      <div className="float-center pb-5 pl-[40%]">
        {/* <button
          onClick={handleRefresh}
          className="flex px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
        >
          <svg
            className="w-5 h-5 mx-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="mx-1">New Posts</span>
        </button> */}
      </div>
      <div className="flex gap-10 ">
        {/* {randomData.map((item: any) => (
          <ExploreDataValidator mode={mode} item={item} key={item.id} />
        ))} */}
        <ExploreDataValidator item={Object.values(data.data)} mode={mode} />
      </div>
    </div>
  );
}

export default GetData;
