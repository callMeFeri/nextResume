import React from "react";
import GetData from "../components/swrFetching/getData";

const Blog = () => {
  return <GetData url="https://jsonplaceholder.typicode.com/photos" />;
};

export default Blog;
