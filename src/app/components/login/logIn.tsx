import React from "react";

import useSWR from "swr";

const fetcher = (args: string) => fetch(args).then((res) => res.json());

function LogIn({ url, email }: { url: string; email: string }) {
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error)
    return (
      <div className="pt-20 text-center">
        Failed to load the data
        <br />
        Check your internet connection
        <br />
        Please try in few moments
      </div>
    );
  if (isLoading)
    return (
      <div className="flex items-center justify-center">
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
  return <div></div>;
}

export default LogIn;
