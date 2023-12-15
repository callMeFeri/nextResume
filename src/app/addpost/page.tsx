"use client";
import React from "react";

import CheckRegistered from "../components/checkRegistered/checkRegistered";
import AddPost from "../components/addPost/addPostForm";

import LogInFirst from "../components/login/LogInFirst";

function page() {
  const premissionAndUsername = CheckRegistered();

  if (premissionAndUsername) {
    return <AddPost username={premissionAndUsername} />;
  } else {
    return <LogInFirst />;
  }
}

export default page;
