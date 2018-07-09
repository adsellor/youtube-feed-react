import React, { PureComponent } from "react";

import {Context}from "../provider/Provider";
import VideoItem from "./VideoItem";
import "../scss/video.scss";

const filterVideos = (videos) => {
  return videos instanceof Array && videos.length !== 0 ? (
    videos.map((video, index) => {
      const currentVideo = video.id.videoId;
      const videoSnippet = video.snippet;
      return (
        <Context.Consumer key={currentVideo}>
          {data => {
            return (
              <div
                className="video-container"
                key={currentVideo}
                onClick={() => data.setModalSource(currentVideo)}
              >
                <VideoItem
                  onClick={() => data.toggleModal()}
                  src={videoSnippet.thumbnails.high.url}
                  title={videoSnippet.title}
                  name={videoSnippet.channelTitle}
                />
              </div>
            );
          }}
        </Context.Consumer>
      );
    })
  ) : (
    <div className="video-container">
      <VideoItem title="No Results Found" />
    </div>
  );
}

const VideoList = () => (
      <Context.Consumer>
        {data => {
          return filterVideos(data.videos);
        }}
      </Context.Consumer>
    );

export default VideoList;
