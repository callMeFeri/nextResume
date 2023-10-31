"use client";
import React, { Attributes } from "react";
import Link from "next/link";
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
      <div className="flex items-center justify-center w-screen h-[1000px]">
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
    <>
      {" "}
      <div className="container pt-20 h-screen pt-20 pl-[5%]">
        <br />

        <div className="flex gap-10">
          {data.data.map(
            (
              item: {
                attributes: {
                  username: string;
                  posts: string;
                  title: string;
                  thumbnailUrl: string;
                };
              },
              i: number
            ) => (
              <>
                {JSON.parse(item.attributes.posts).map(
                  (post: { title: string; textmemory: string }, i: number) => (
                    <>
                      {
                        <div
                          className={`max-w-sm rounded overflow-hidden ${
                            mode === "dark" ? "bg-white" : "bg-black"
                          }`}
                        >
                          <Image
                            className="w-full"
                            src="/135042-sky-mountain-range-mountainous-landforms-sunset-nature-1920x1080.jpg"
                            width={1000}
                            height={1000}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-6 ">
                            <div
                              className={`font-bold text-xl mb-2 ${
                                mode === "dark" ? "text-black" : "text-white"
                              }`}
                            >
                              {post.title}
                            </div>
                            <p className="text-inherit">{post.textmemory}</p>
                          </div>
                          <div className=" pt-[30%]">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                              #{item.attributes.username}
                            </span>
                          </div>
                        </div>
                      }
                    </>
                  )
                )}
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default GetData;
