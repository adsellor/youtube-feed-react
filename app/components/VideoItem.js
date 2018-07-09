import React from "react";

import "../scss/video.scss";

const VideoItem = props => (
  <div className="video-wrapper" onClick={props.onClick}>
    <img style={{ width: "300px", height: "300px" }} src={props.src} />
    <p className="title"> {props.title} </p>
    <p> {props.name} </p>
  </div>
);

export default VideoItem;
