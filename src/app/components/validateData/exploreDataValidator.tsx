import React from "react";

import Image from "next/image";
import Link from "next/link";

import _, { random } from "lodash";

function ExploreDataValidator({
  item,
  mode,
}: {
  item: {
    attributes: {
      posts: string;
      username: string;
    };
  };
  mode: string;
}) {
  if (item.attributes.posts) {
    const parsedPosts = JSON.parse(item.attributes.posts);

    // Randomly select one post
    const randomPost = _.sample(parsedPosts);

    return (
      <div
        className={`max-w-sm rounded mb-5 shadow-lg ${
          mode === "dark" ? "shadow-white" : "shadow-black"
        } `}
      >
        <div className="absolute pl-2 pt-2">
          <span className="inline-block bg-gradient-to-r from-blue-500-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
            #{item.attributes.username}
          </span>
        </div>
        <Image
          priority
          className="w-full h-30 object-cover"
          src="/135042-sky-mountain-range-mountainous-landforms-sunset-nature-1920x1080.jpg"
          width={1000}
          height={500}
          alt="Sunset in the mountains"
        />
        <div className="px-6 pb-20">
          <div className="font-bold text-xl mb-2">{randomPost.title}</div>
          <p className="text-lg line-clamp-2 box-orient-vertical overflow-hidden block">
            {randomPost.textmemory}
          </p>
          <Link href={`/explore/${randomPost.title}`} className="">
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              See More
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ExploreDataValidator;
