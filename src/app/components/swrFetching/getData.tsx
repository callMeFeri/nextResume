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
              <Link
                href="/portfolio/illustration"
                className="border border-[1px] rounded w-[300px] h-[300px] relative"
                key={i}
              >
                <span className="absolute right-[10px] text-3xl text-black">
                  {item.attributes.username}
                </span>

                <Image
                  src="/image-from-rawpixel-id-5926183-jpeg.jpg"
                  width={500}
                  height={10}
                  alt="Ill"
                  className="h-full hover:grayscale"
                />
                {JSON.parse(item.attributes.posts).map(
                  (post: { title: string; textmemory: string }, i: number) => (
                    <>
                      <h1 key={i} className="text-2xl">
                        {post.title}
                      </h1>
                      <p className=" text-base">{post.textmemory}</p>
                    </>
                  )
                )}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default GetData;
