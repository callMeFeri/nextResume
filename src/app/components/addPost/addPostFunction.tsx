import React, { FormEvent } from "react";
import AddPostToast from "./addPostToast";

import type { User } from "@/app/types/types";

const AddPostFunction = async (e: FormEvent<HTMLFormElement>) => {
  const url = `http://localhost:1337/api/posts`;

  //getiing the user name
  const user: string = localStorage.getItem("User profile") as string;
  const userName: User = JSON.parse(user).user.username;

  //grabbing infos
  const postArr = JSON.stringify({
    data: {
      title: (e.target as HTMLFormElement).title.value,
      postsContent: (e.target as HTMLFormElement).textmemory.value,
      userId: userName,
      postId: new Date().getTime().toString(),
      createdDate: new Date().toISOString(),
    },
  });

  //fetching part
  const newPost = {
    method: "post",
    body: postArr,
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(url, newPost);
  //do sm functions with response result
  if (response.ok) {
    AddPostToast(true);
  }
  return;
};

export default AddPostFunction;
