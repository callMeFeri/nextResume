"use client";
import React from "react";

import useSWR from "swr";
import Image from "next/image";
import { Button } from "../button/Button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function GetData({ url }: { url: string }) {
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="text-center pt-20 pb-10">
      <h1 className="text-5xl">Wellcome To The API Fetching Part</h1>
      <br />
      {data
        .slice(0, 20)
        .map(
          (item: {
            title: string;
            id: number;
            url: string;
            thumbnailUrl: string;
          }) => (
            <div key={item.id}>
              <div className="flex flex-col items-center justify-center ">
                <div className="flex flex-col border rounded-lg max-w-[500px] bg-gradient-to-br from-black to-gray-300">
                  <div className=" rounded-lg p-5">
                    <Image
                      src="/farzad-p-xSl33Wxyc-unsplash.jpg"
                      width={500}
                      height={250}
                      alt={item.title}
                    />
                  </div>
                  <div className="float-left mt-5 text-center items-left p-4">
                    <h1 className="text-2xl">{item.title}</h1>
                    <h1 className="text-2xl">{item.title}</h1>
                    <h1 className="text-2xl">{item.title}</h1>
                    <h1 className="text-2xl">{item.title}</h1>
                    <h1 className="text-2xl">{item.title}</h1>
                    <br />
                    <div className="max-w-[150px] border border-white ml-[35%] bg-blue-600 rounded-full min-h-30 items-center">
                      <Button text="Click Me" url="/" />
                    </div>
                  </div>
                  <div className="min-h-10 w-auto"></div>
                </div>
              </div>
              <br />
            </div>
          )
        )}
    </div>
  );
}

export default GetData;
