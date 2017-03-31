import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const VideoListItem = ({videos}) => {
  return (
    <iframe
      title='YouTube video player'
      width='340'
      height='390'
      src="https://www.youtube.com/embed/V6sw_JlqO2w"
      frameBorder='0'
      allowFullScreen>
    </iframe>
  );
};

VideoListItem.propTypes = {
  videos: PropTypes.object.isRequired
};

export default VideoListItem;
