import React, { useState } from "react";
import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query";

type Props = {
  mode: string;
  item: never[];
};

import { useCollapse } from "react-collapsed";

import Image from "next/image";

const queryClient = new QueryClient();

const fetchPosts = async (page = 1, item: never[]) => {
  const pageSize = 2; // Number of posts per page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedPosts = item.slice(startIndex, endIndex);

  // Simulate an asynchronous operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ posts: slicedPosts });
    }, 2000);
  });
};

const Page = ({ mode, item }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [page, setPage] = useState(1);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery(
    "posts",
    ({ pageParam }) => fetchPosts(pageParam, item),
    {
      getNextPageParam: (lastPage: any) =>
        lastPage.posts.length > 0 ? page + 1 : undefined,
    }
  );

  if (isLoading && page === 1) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data: {isError}</div>;
  }

  return (
    <>
      <div className="min-h-screen">
        {item.map(
          (post: { attributes: { posts: string; username: string } }) => (
            <div key={post.attributes.username}>
              {post.attributes.posts && post.attributes.posts.length > 0 ? (
                JSON.parse(post.attributes.posts).map(
                  (items: {
                    title: string;
                    textmemory: string;
                    id: number;
                  }) => (
                    <>
                      <div
                        className={`max-w-sm rounded mb-5 h-full shadow-lg ${
                          mode === "dark" ? "shadow-white" : "shadow-black"
                        } `}
                      >
                        <div className="absolute pl-2 pt-2">
                          <span className="inline-block bg-gradient-to-r from-blue-500-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">
                            #{post.attributes.username}
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
                          <div className="font-bold text-xl mb-2">
                            {items.title}
                          </div>

                          <p
                            {...getCollapseProps()}
                            className="text-lg  whitespace-normal break-all box-orient-horizontal overflow-hidden block"
                          >
                            {items.textmemory}
                          </p>

                          <button
                            {...getToggleProps({
                              onClick: (e) =>
                                setIsExpanded((prevExpanded) => !prevExpanded),
                            })}
                            type="button"
                            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            {isExpanded ? "Read Less" : "Read More"}
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
                        </div>
                      </div>
                    </>
                  )
                )
              ) : (
                <> </>
              )}
            </div>
          )
        )}

        {isFetchingNextPage && <div>Loading more...</div>}

        {hasNextPage && <div ref={fetchNextPage} style={{ height: "20px" }} />}
      </div>
    </>
  );
};

export default function WrappedPage({ mode, item }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Page mode={mode} item={item} />
    </QueryClientProvider>
  );
}
