import React, { FormEvent } from "react";
import AddPostToast from "./addPostToast";

const AddPostFunction = async (e: FormEvent<HTMLFormElement>) => {
  //grabbing infos
  const url = `http://localhost:1337/api/posts`;
  //merging new post and old one
  const prevData = await fetch(url);

  //getiing the user name
  const userName: string | null = localStorage.getItem("currentUserInfo");

  const postArr = JSON.stringify({
    data: {
      title: (e.target as HTMLFormElement).title.valueOf,
      postsContent: (e.target as HTMLFormElement).textmemory.value,
      userId: userName,
      postId: new Date().getTime().toString(),
      createdDate: new Date().toISOString(),
    },
  });

  let dataPost;
  dataPost = { data: { postArr } };
  //fetching part
  const newPost = {
    method: "post",
    body: postArr,
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
