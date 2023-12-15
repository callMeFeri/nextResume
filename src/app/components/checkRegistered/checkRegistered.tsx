"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import type { User } from "@/app/types/types";

// eslint-disable-next-line @next/next/no-async-client-component
function CheckRegistered() {
  const [result, setResult] = useState<boolean | string>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = localStorage.getItem("User token") as string;
        const user = localStorage.getItem("User profile");
        const userData: User = user && JSON.parse(user);
        const email = userData?.user.email;
        const username = userData?.user.username;

        const password = localStorage.getItem("User password");
        console.log("userToken", username);

        const response = await axios.post(`${process.env.NEXT_PUBLIC_}`, {
          identifier: email,
          password: password,
        });

        if (response.data.user.username === username) {
          console.log("username", response.data.user.username);
          setResult(username);
        } else {
          setResult(false);
        }
      } catch (error) {
        console.log("Error:", error);
        setResult(false);
      }
    };

    fetchData();
  }, []);

  return result;
}

export default CheckRegistered;
