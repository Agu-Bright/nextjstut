"use client";
import React, { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>something went wrong</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}

export default Error;
