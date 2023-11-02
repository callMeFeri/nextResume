"use client";
import React from "react";
import useSWR from "swr";
import { useGlobalContext } from "@/app/context/AppContext";
import ExploreDataValidator from "../validateData/exploreDataValidator";
import _ from "lodash";

const fetcher = (args: string) => fetch(args).then((res) => res.json());

function GetData({ url }: { url: string }) {
  const { mode }: any = useGlobalContext();

  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

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

  return (
    <div className="container pt-20 pl-[10%] pb-5 min-h-screen">
      <br />
      <div className="flex gap-10 ">
        {randomData.map((item: any) => (
          <ExploreDataValidator key={item.id} item={item} mode={mode} />
        ))}
      </div>
    </div>
  );
}

export default GetData;
