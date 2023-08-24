"use client";

import { useEffect, useState } from "react";
const FeedReader = () => {
  const [feed, setFeed] = useState("");
  useEffect(() => {
    const doFetch = async () => {
      const fetched = await fetch("/api/product-feed", { methood: "GET" });
      const response = await fetched.json();
      setFeed(JSON.stringify(response.data));
    };

    doFetch();
  }, []);
  return <>{feed}</>;
};

export default FeedReader;
