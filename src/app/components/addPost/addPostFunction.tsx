import React from "react";
import AddPostToast from "./addPostToast";

const AddPostFunction = async (e: React.FormEvent<HTMLFormElement> | any) => {
  //grabbing username
  const currentUserId = localStorage.getItem("currentUserInfo");
  //grabbing infos
  const url = `http://localhost:1337/api/users-data/${currentUserId}`;
  //merging new post and old one
  const prevData = await fetch(url);
  const prevDataResponse = await prevData.json();
  const prevPost = JSON.parse(prevDataResponse.data.attributes.posts);
  const postArr = JSON.stringify([
    { title: e.target.title.value, textmemory: e.target.textmemory.value },
  ]);
  const mergedPosts = prevPost.concat(JSON.parse(postArr));
  const mergedPostsString = JSON.stringify(mergedPosts);
  // const prevPostsContent=prevDataResponse.attributes
  const dataPost = { data: { posts: mergedPostsString } };
  //fetching part
  const newPost = {
    method: "PUT",
    body: JSON.stringify(dataPost),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(url, newPost);
  //do sm functions with response result
  if (response.ok) {
    const responseData = await response.json();
    console.log("succ");
    AddPostToast(true);
  }
  return <div></div>;
};

export default AddPostFunction;
