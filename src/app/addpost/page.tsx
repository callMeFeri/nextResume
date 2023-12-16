"use client";
import React from "react";

import CheckRegistered from "../components/checkRegistered/checkRegistered";
import AddPost from "../components/addPost/addPostForm";

import LogInFirst from "../components/login/LogInFirst";
import { useGlobalContext } from "../context/AppContext";

function Page() {
  const { authenticated }: { authenticated?: boolean } = useGlobalContext();

  const premissionAndUsername = CheckRegistered();

  if (premissionAndUsername) {
    return <AddPost username={premissionAndUsername} />;
  } else if (!premissionAndUsername && !authenticated) {
    return <LogInFirst />;
  }
}

export default Page;
