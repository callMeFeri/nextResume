import React from "react";

const AddPostFunction = async (e: FormData) => {
  //grabbing username
  const currentUserId = localStorage.getItem("currentUserInfo");
  //grabbing infos
  const url = `http://localhost:1337/api/users-data/${currentUserId}`;
  const postArr = JSON.stringify([
    { title: e.target.title.value, textmemory: e.target.textmemory.value },
  ]);

  const dataPost = { data: { posts: postArr } };
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
    return;
  }
  console.log(response);
  return <div></div>;
};

export default AddPostFunction;
