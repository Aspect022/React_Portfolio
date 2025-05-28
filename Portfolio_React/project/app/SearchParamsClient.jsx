"use client";
import React, { Suspense } from "react";
import SearchParamsClient from "./SearchParamsClient";
import Loading from "./Loading"; // your loading UI

export default function Page() {
  return (
    <>
      <h1>Welcome to my portfolio</h1>
      <Suspense fallback={<Loading />}>
        <SearchParamsClient />
      </Suspense>
    </>
  );
}
