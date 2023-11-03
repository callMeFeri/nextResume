"use client";
import React from "react";

import useSWR from "swr";

const fetcher = (args: string) => fetch(args).then((res) => res.json());

function GetDataFetcher(url: string) {
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  });
  return { data, error, isLoading };
}

export default GetDataFetcher;
