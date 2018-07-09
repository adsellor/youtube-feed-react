import React, { PureComponent } from "react";

import {Context}from "../provider/Provider";
import VideoItem from "./VideoItem";
import "../scss/video.scss";

class VideoList extends PureComponent {
  state = {
    madalContent: ""
  };
  handleClick(cb1, param1, cb2) {
    cb1(param1);
    return cb2();
  }

  filterVideos(videos) {
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

  render() {
    return (
      <Context.Consumer>
        {data => {
          return this.filterVideos(data.state.videos);
        }}
      </Context.Consumer>
    );
  }
}

export default VideoList;
