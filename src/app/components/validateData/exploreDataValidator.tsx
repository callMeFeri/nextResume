import React from "react";

import Image from "next/image";

function ExploreDataValidator({
  item,
  mode,
}: {
  item: {
    attributes: {
      username: string;
      posts: string;
      title: string;
      thumbnailUrl: string;
    };
  };
  mode: string;
}) {
  if (item.attributes.posts) {
    return (
      <div>
        {" "}
        {JSON.parse(item.attributes.posts) ? (
          <>
            {" "}
            {JSON.parse(item.attributes.posts).map(
              (post: { title: string; textmemory: string }, i: number) => (
                <>
                  {
                    <div
                      className={`max-w-sm rounded overflow-hidden border border-[1px] ${
                        mode === "dark" ? "border-white" : "border-black"
                      }`}
                    >
                      {" "}
                      <div className="absolute">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                          #{item.attributes.username}
                        </span>
                      </div>
                      <Image
                        priority
                        className="w-full min-h-40"
                        src="/135042-sky-mountain-range-mountainous-landforms-sunset-nature-1920x1080.jpg"
                        width={1000}
                        height={500}
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 pb-20">
                        <div className={`font-bold text-xl mb-2 `}>
                          {post.title}
                        </div>
                        <p className="text-inherit">{post.textmemory}</p>
                      </div>
                    </div>
                  }
                </>
              )
            )}
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ExploreDataValidator;
