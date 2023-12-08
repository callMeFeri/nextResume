import React, { FormEvent } from "react";
import AddPostToast from "./addPostToast";

const AddPostFunction = async (e: FormEvent<HTMLFormElement>) => {
  //grabbing username
  const currentUserId = localStorage.getItem("currentUserInfo");
  //grabbing infos
  const url = `http://localhost:1337/api/posts`;
  //merging new post and old one
  const prevData = await fetch(url);
  const prevDataResponse = await prevData.json();

  //getiing the userId
  const userId = localStorage.getItem("currentUserInfo");

  const postArr = JSON.stringify([
    {
      title: (e.target as HTMLFormElement).title.valueOf,
      postsContent: (e.target as HTMLFormElement).textmemory.value,
      userId: userId,
      postId: new Date().getTime().toString(),
      createdDate: new Date().toISOString(),
    },
  ]);
  let prevPost;
  let dataPost;
  if (prevDataResponse.data.attributes.posts) {
    prevPost = JSON.parse(prevDataResponse.data.attributes.posts);
    const mergedPosts = prevPost.concat(JSON.parse(postArr));
    const mergedPostsString = JSON.stringify(mergedPosts);
    // const prevPostsContent=prevDataResponse.attributes
    dataPost = { data: { posts: mergedPostsString } };
  } else {
    dataPost = { data: { posts: postArr } };
  }
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
  return;
};

export default AddPostFunction;
