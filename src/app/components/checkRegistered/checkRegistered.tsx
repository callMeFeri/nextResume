"use client";
import React from "react";

import axios from "axios";

import type { User } from "@/app/types/types";
function CheckRegistered() {
  const [result, setResult] = React.useState<boolean>();

  const userToken = localStorage.getItem("User token");
  const user = localStorage.getItem("User profile");
  const userData: User = user && JSON.parse(user);
  const userEmail = userData?.user.email;
  const userPassword = userData?.user.password;
  console.log("local storage user datas", userData);

  const response = axios
    .post(`${process.env.NEXT_PUBLIC_}`, {
      identifier: userEmail,
      password: userPassword,
    })
    .then((res) => {
      console.log("response in CheckRegistered:", res);
      if (res.data.jwt === userToken) {
        setResult(false);
      }
    })
    .catch((error) => {
      console.log("add post authorization error", error);
      setResult(true);
    });
  return result;
}
export default CheckRegistered;
