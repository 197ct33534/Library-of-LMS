import React from 'react';

const Video = () => {
  return (
    <>
      <iframe
        style={{ width: '100%', height: '511px' }}
        src="https://www.youtube.com/embed/3Ir2hyHwHMI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default Video;
