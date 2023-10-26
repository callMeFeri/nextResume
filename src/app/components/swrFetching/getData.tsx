"use client";
import React from "react";

import useSWR from "swr";
import Image from "next/image";

import { Button } from "../button/Button";

const fetcher = (args: string) => fetch(args).then((res) => res.json());

function GetData({ url }: { url: string }) {
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="text-center pt-20 pb-10 ">
      <h1 className="text-7xl bg-gradient-to-b from-green-800 to-blue-300 bg-clip-text text-transparent">
        Top Selected Posts
      </h1>
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
                <div className="flex flex-col border rounded-lg w-[80%] items-center ">
                  <div className=" rounded-lg p-5">
                    <Image
                      src="/farzad-p-xSl33Wxyc-unsplash.jpg"
                      width={700}
                      height={200}
                      alt={item.title}
                    />
                  </div>
                  <div className="float-left mt-5 text-center items-lef">
                    <h1 className="text-2xl">
                      {item.title}
                      {item.title}
                      {item.title}
                    </h1>
                    <h1 className="text-2xl">
                      {item.title}
                      {item.title}
                      {item.title}
                      {item.title}
                    </h1>
                    <h1 className="text-2xl">
                      {item.title}
                      {item.title}
                    </h1>
                    <h1 className="text-2xl">{item.title}</h1>
                    <h1 className="text-2xl">{item.title}</h1>
                    <br />
                    <div className="pb-5">
                      <Button text="Click Me" url="/" absolute={false} />
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
