// eslint-disable-next-line no-unused-vars
import React from "react";

const VideoYouTube = (props) => {
    const videoUrl = props.url;

    // Using the URL object to extract the video ID
    const url = new URL(videoUrl);
    const videoId = url.searchParams.get("v");

    // console.log(videoId);


  return (
    <div className="featured-video-container cursor-pointer h-auto">
      <div>
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
      <div>
        <p className="text-bold text-white text-transform:uppercase">
          {props.title} <br />
            <span className="text-gray-400">{ props.desc}</span>
        </p>
      </div>
    </div>
  );
};

export default VideoYouTube;
