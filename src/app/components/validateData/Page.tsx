"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import Image from "next/image";
import { Props, fetchPosts, ReadMoreButton } from "./exploreDataValidator";

export const Page = ({ mode, item }: Props) => {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
      setPage((prevPage) => prevPage + 1);
    }
  };

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
      <div className="min-h-screen gap-5">
        {item.flat().map(
          (post: {
            attributes: {
              postsContent: string;
              userId: string;
              postId: string;
              title: string;
            };
          }) => (
            <div key={post.attributes.postId}>
              {post.attributes.postsContent &&
              post.attributes.postsContent.length > 0 ? (
                <>
                  <div
                    className={`max-w-sm p-5 rounded mb-5 h-full shadow-lg ${
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
                      className="w-full h-30 object-cover"
                      src="/135042-sky-mountain-range-mountainous-landforms-sunset-nature-1920x1080.jpg"
                      width={1000}
                      height={500}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 pb-20">
                      <div className="font-bold text-xl mb-2">
                        {post.attributes.title}
                      </div>
                    </div>
                    <ReadMoreButton
                      postId={post.attributes.postId}
                      content={post.attributes.postsContent}
                    />
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
    </>
  );
};