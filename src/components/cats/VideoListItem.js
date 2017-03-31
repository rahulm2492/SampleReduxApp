import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const VideoListItem = ({video}) => {
  return (
    <iframe
      title='YouTube video player'
      width='340'
      height='390'
      src= {video.url}
      frameBorder='0'
      allowFullScreen>
    </iframe>
  );
};

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListItem;
