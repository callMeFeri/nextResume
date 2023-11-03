"use client";
import React from "react";
import GetData from "../components/swrFetching/getData";
import { useGlobalContext } from "../context/AppContext";

const Blog = () => {
  const { mode }: any = useGlobalContext();
  return (
    <div className="">
      <GetData url="http://localhost:1337/api/users-data" mode={mode} />
    </div>
  );
};

export default Blog;
