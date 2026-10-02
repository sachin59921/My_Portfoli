import React from "react";

function Pre({ load }) {
  return (
    <div
      id={load ? "preloader" : "preloader-none"}
      aria-hidden="true"
    />
  );
}

export default Pre;