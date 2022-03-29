import React from "react";

export default function Loading({ content }) {
  return (
    <div className="loading-page">
      <div className="loading-content">
        <div className="spinner spinner-border"></div>
        <p>{content}</p>
      </div>
    </div>
  );
}
