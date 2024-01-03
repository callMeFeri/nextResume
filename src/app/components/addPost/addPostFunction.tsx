import React, { FormEvent } from "react";

import type { User } from "@/app/types/types";

const AddPostFunction = async ({
  e,
  setPostAdded,
}: {
  e: FormEvent<HTMLFormElement>;
  setPostAdded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const url = `http://localhost:1337/api/posts`;

  //getiing the user name
  const user: string = localStorage.getItem("User profile") as string;
  const userName: User = JSON.parse(user).user.username;

  //grabbing infos
  const postArr = JSON.stringify({
    data: {
      title: (e.target as HTMLFormElement).text.value as string,
      postsContent: (e.target as HTMLFormElement).textmemory.value as string,
      userId: userName,
      postId: new Date().getTime().toString(),
      createdDate: new Date().toISOString(),
    },
  });

  //posting part
  const newPost = {
    method: "post",
    body: postArr,
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(url, newPost);
  //do sm functions with response result
  if (response.ok) {
    console.log("add post succes");
    // AddPostToast(true);
    return setPostAdded(true);
  }
  return;
};

export default AddPostFunction;
