"use client";
import React, { Attributes } from "react";

import useSWR from "swr";
import Image from "next/image";

import { useGlobalContext } from "@/app/context/AppContext";

const fetcher = (args: string) => fetch(args).then((res) => res.json());

function GetData({ url }: { url: string }) {
  const { mode }: any = useGlobalContext();

  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(data);

  if (error)
    return (
      <div className="pt-20 text-center h-[900px]">
        Failed to load the data
        <br />
        Check your internet connection
        <br />
        Please try in few moments
      </div>
    );
  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-[1000px]">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="https://via.placeholder.com/600/771796"
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
  return (
    <div className="text-center pt-20 pb-10 min-h-[1000px]">
      <h1 className="text-7xl bg-gradient-to-b from-green-800 to-blue-300 bg-clip-text text-transparent">
        Top Selected Posts
      </h1>
      <br />
      {data.data.map(
        (item: {
          attributes: {
            username: string;
            posts: string;
            title: string;
            thumbnailUrl: string;
          };
        }) => (
          <>
            <div className="flex w-full  text-center pl-[5%] rounded ">
              <Image
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                alt="Woman holding a mug"
                height={1000}
                width={1000}
                src="/"
              />
              <div
                className={`border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 gap-2${
                  mode === "dark" ? "bg-slate-100 text-white" : "bg-black"
                } rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}
              >
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current  w-3 h-3 mr-2"
                      xmlns=""
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                  </p>
                  <div className=" font-bold text-xl mb-2">
                    {JSON.parse(item.attributes.posts).map(
                      (
                        post: { title: string; textmemory: string },
                        i: number
                      ) => (
                        <>
                          <p key={i}>{post.title}</p>
                          <p className=" text-base">{post.textmemory}</p>
                        </>
                      )
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  {/* <Image
                      className="w-10 h-10 rounded-full mr-4"
                      src={item.url}
                      alt="Avatar of Jonathan Reinink"
                      width={100}
                      height={100}
                    /> */}
                  <div className="text-sm">
                    <p className=" leading-none">{item.attributes.username}</p>
                  </div>
                  <div className="pl-[90%] top-[80%]">
                    <button className="flex items-center justify-center w-5 h-5 bg-red-500 rounded-full">
                      <svg
                        className="w-2 h-2 text-white fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 17.67l-1.902-1.72C3.144 12.42 0 9.156 0 5.5 0 2.42 2.42 0 5.5 0 7.02 0 8.457.736 10 .736c1.543 0 2.98-.736 4.5-.736C17.58 0 20 2.42 20 5.5c0 3.656-3.144 6.92-8.098 10.45L10 17.67z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default GetData;
