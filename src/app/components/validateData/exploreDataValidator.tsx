"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { useCollapse } from "react-collapsed";
import Image from "next/image";
import _ from "lodash";

type Props = {
  mode: string;
  item: never[];
};

const queryClient = new QueryClient();

const fetchPosts = async (page = 1, item: never[]) => {
  const pageSize = 1; // Number of posts per page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Shuffle the slicedPosts array using lodash shuffle
  const shuffledPosts = _.shuffle(item);

  const slicedPosts = shuffledPosts.slice(startIndex, endIndex);

  // Simulate an asynchronous operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ posts: slicedPosts });
    }, 2000);
  });
};

const Page = ({ mode, item }: Props) => {
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
    ({ pageParam }) => fetchPosts(pageParam, item),
    {
      getNextPageParam: (lastPage: any) =>
        lastPage.posts.length > 0 ? page + 1 : undefined,
    }
  );

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
  }, []);

  if (isLoading && page === 1) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data: {isError}</div>;
  }

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <div className="min-h-screen gap-5">
        {item
          .flat()
          .map((post: { attributes: { posts: string; username: string } }) => (
            <div key={post.attributes.username}>
              {post.attributes.posts && post.attributes.posts.length > 0 ? (
                _.shuffle(JSON.parse(post.attributes.posts)).map(
                  (items: {
                    title: string;
                    textmemory: string;
                    id: number;
                  }) => (
                    <>
                      <div
                        className={`max-w-sm p-5 rounded mb-5 h-full shadow-lg ${
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

                          <ReadMoreButton
                            postId={items.id}
                            content={items.textmemory}
                          />
                        </div>
                      </div>
                    </>
                  )
                )
              ) : (
                <> </>
              )}
            </div>
          ))}

        {isFetchingNextPage && <div>Loading more...</div>}

        {hasNextPage && (
          <button onClick={loadMore} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </>
  );
};

const ReadMoreButton = ({
  postId,
  content,
}: {
  postId: number;
  content: string;
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div>
      <div {...getCollapseProps()}>
        {isExpanded ? content : `${content.slice(0, 100)}...`}
      </div>

      <button {...getToggleProps()}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default function WrappedPage({ mode, item }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Page mode={mode} item={item} />
    </QueryClientProvider>
  );
}
