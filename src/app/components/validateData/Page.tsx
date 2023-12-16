import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import Image from "next/image";
import { FetchPosts } from "./exploreDataValidator";
import type { DataProps } from "@/app/types/types";
import { useCollapse } from "react-collapsed";

export const Page = ({ mode, item }: DataProps) => {
  const loadMoreButtonRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery(
    "posts",
    ({ pageParam }) => FetchPosts(pageParam, item),
    {
      getNextPageParam: (lastPage: any) =>
        lastPage.posts.length > 0 ? page + 1 : undefined,
    }
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
      setPage((prevPage) => prevPage + 1);
    }
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  useEffect(() => {
    const handleScroll = () => {
      const { current } = loadMoreButtonRef;
      if (
        current &&
        current.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  if (isLoading && page === 1) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data: {isError}</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center">
        <div className=" gap-10">
          {item.flat().map(
            (post: {
              attributes: {
                postsContent: string;
                userId: string;
                postId: string;
                title: string;
              };
            }) => (
              <div key={post.attributes.postId} className="">
                {post.attributes.postsContent &&
                post.attributes.postsContent.length > 0 ? (
                  <>
                    <div
                      className={`w-full h-[90%] p-5 rounded mb-5 h-full shadow-lg ${
                        mode === "dark" ? "shadow-white" : "shadow-black"
                      } `}
                    >
                      <div className="absolute pl-2 pt-2">
                        <span className="inline-block bg-gradient-to-r from-blue-500-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
                          #{post.attributes.userId}
                        </span>
                      </div>
                      <Image
                        priority
                        className="w-full h-[50%] object-cover"
                        src="/135042-sky-mountain-range-mountainous-landforms-sunset-nature-1920x1080.jpg"
                        width={1000}
                        height={500}
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 pb-20">
                        <div className="font-bold text-xl text-red-600 absolute">
                          {post.attributes.title}
                        </div>
                      </div>
                      <div className="bottom-2">
                        <div className="relative">
                          {/* Content to be collapsed */}
                          <div
                            {...getCollapseProps()}
                            className="font-bold text-xl text-red-600 absolute"
                          >
                            {isExpanded
                              ? post.attributes.postsContent
                              : `${post.attributes.postsContent.slice(
                                  0,
                                  300
                                )}...`}
                          </div>
                          <br />
                          {/* Read More button */}
                          <button
                            {...getToggleProps()}
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                          >
                            <svg
                              className="w-4 h-4 mr-3 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            <span className="text-lg  w-full text-center ">
                              {isExpanded ? "Read Less" : "Read More"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <> </>
                )}
              </div>
            )
          )}

          {isFetchingNextPage && <div>Loading more...</div>}

          {hasNextPage && (
            <button onClick={loadMore} disabled={isFetchingNextPage}>
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
