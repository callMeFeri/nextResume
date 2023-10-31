import React from "react";
import GetData from "../components/swrFetching/getData";

const Blog = () => {
  return (
    <div className="">
      <GetData url="http://localhost:1337/api/users-data" />
    </div>
  );
};

export default Blog;
