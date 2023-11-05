export const FetchPosts = async ({
  page = 1,
  posts,
}: {
  page: number;
  posts: [];
}) => {
  const pageSize = 2; // Number of posts per page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedPosts = posts.slice(startIndex, endIndex);

  // Simulate an asynchronous operation
  return {
    pages: [
      {
        posts: slicedPosts,
      },
    ],
  };
};
