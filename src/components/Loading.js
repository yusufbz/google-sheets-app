import React from "react";

export default function Loading({ content }) {
  return (
    <div className="loading-page">
      <div className="content">
        <div class="spinner spinner-border"></div>
        <p>{content}</p>
      </div>
    </div>
  );
}
