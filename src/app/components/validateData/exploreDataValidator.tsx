import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCollapse } from "react-collapsed";
import _ from "lodash";
import { Page } from "./Page";
import { DataProps, Post } from "@/app/types/types";

const queryClient = new QueryClient();

export const FetchPosts = async (page = 1, item: never[]) => {
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

export const ReadMoreButton = ({
  postId,
  content,
}: {
  postId?: string;
  content: string;
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="relative text-center mt-5 absolute">
      {/* Content to be collapsed */}
      <div {...getCollapseProps()} className="text-red-600 text-xl mb-10">
        {isExpanded && content}
      </div>
      <br />
      {/* Read More button */}
      <button
        {...getToggleProps()}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        <svg className="w-4 h-4 mr-3 fill-current" viewBox="0 0 20 20">
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
  );
};

export default function ExploreDataValidator({ mode, item }: DataProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Page mode={mode} item={item} />
    </QueryClientProvider>
  );
}
