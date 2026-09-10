import React from "react";

export function Loader({ size = 32, className = "" }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-4 border-slate-200 border-t-[#6D0826] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
