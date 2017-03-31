import React, {PropTypes} from 'react';
import VideoListItem from './VideoListItem';
import {Link} from 'react-router';


const CatList = ({videos}) => {
  const list = videos.map(function(video){
     return <VideoListItem video={video} />})
  return (
      <ul className="list-group">
        {list}
      </ul>
  );
};

CatList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default CatList;
