"use client";
import React, { Suspense } from "react";
import SearchParamsClient from "./SearchParamsClient";


export default function Page() {
  return (
    <>
      <h1>Welcome to my portfolio</h1>
      <Suspense fallback={<div>Loading search parameters...</div>}>
        <SearchParamsClient />
      </Suspense>
    </>
  );
}