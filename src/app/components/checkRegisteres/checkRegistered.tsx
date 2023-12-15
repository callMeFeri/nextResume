import React from "react";

import axios from "axios";

import type { User } from "@/app/types/types";
function checkRegistered() {
  const userToken = localStorage.getItem("User token");
  const user = localStorage.getItem("User profile");
  const userData: User = user && JSON.parse(user);
  const userEmail = userData?.user.email;
  const userPassword = userData?.user.password;

  const response = axios
    .post(`${process.env.NEXT_PUBLIC_}`, {
      identifier: userEmail,
      password: userPassword,
    })
    .then((res) => true)
    .catch(() => false);
}
export default checkRegistered;
