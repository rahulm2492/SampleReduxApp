import React, {PropTypes} from 'react';
import VideoListItem from './VideoListItem';
import {Link} from 'react-router';


const CatList = ({videos}) => {
  return (
      <ul className="list-group">
        {videos.map(video =>
           <li className="list-group-item" key={video.id}><Link to={'/videos/' + video.id}>{video.name}</Link></li>
        )}
      </ul>
  );
};

CatList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default CatList;
