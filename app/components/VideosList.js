import React from "react";

import { Context } from "../provider/Provider";
import VideoItem from "./VideoItem";
import Modal from "./Modal";
import "../scss/video.scss";

const FilterVideos = (props, videos) => {
  return videos instanceof Array && videos.length !== 0 ? (
    videos.map((video, index) => {
      const currentVideo = video.id.videoId;
      const videoSnippet = video.snippet;
      return (
              <div
                className="video-container"
                key={currentVideo}
                onClick={() => props.setModalSource(currentVideo)}
              >
                <VideoItem
                  onClick={() => props.toggleModal()}
                  src={videoSnippet.thumbnails.high.url}
                  title={videoSnippet.title}
                  name={videoSnippet.channelTitle}
                />
              </div>
            );
    })
  ) : (
    <div className="video-container">
      <VideoItem title="No Results Found" />
    </div>
  );
};

const VideoList = () => (
  <Context.Consumer>
    {data => {
      return (
        <React.Fragment>
          {FilterVideos(data, data.videos)}
          <Modal
            toggleModal={data.toggleModal}
            modalSource={data.modalSource}
            isModalOpen={data.isModalOpen}
          />
        </React.Fragment>
      );
    }}
  </Context.Consumer>
);

export default VideoList;
