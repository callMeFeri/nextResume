import React from "react";
import Image from "next/image";
import _ from "lodash";

function ExploreDataValidator({ item, mode }: { item: any; mode: string }) {
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
          <p className="text-inherit">{randomPost.textmemory}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ExploreDataValidator;
