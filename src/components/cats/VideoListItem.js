import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const VideoListItem = ({videos}) => {
  return (
    <li className="list-group-item"><Link to={'/videos/' + videos.id}>{videos.name}</Link></li>
  );
};

VideoListItem.propTypes = {
  videos: PropTypes.object.isRequired
};

export default VideoListItem;
