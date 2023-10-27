import React from "react";
import GetData from "../components/swrFetching/getData";

const Blog = () => {
  return (
    <div className="">
      <GetData url="https://jsonplaceholder.typicode.com/photos" />
    </div>
  );
};

export default Blog;
