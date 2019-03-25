import React from "react";

export const Card = props => {
  const { storyType, title, storyNumber, effort } = props;

  return (
    <div className={`card ${storyType}`}>
      <p className="title">{title}</p>
      <p className="story-number">#{storyNumber}</p>
      <p className="effort">{effort}</p>
    </div>
  );
};
