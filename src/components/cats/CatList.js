import React, {PropTypes} from 'react';
import VideoListItem from './VideoListItem';
import {Link} from 'react-router';


const CatList = ({videos}) => {
  return (
      <ul className="list-group">
        <VideoListItem/>
      </ul>
  );
};

CatList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default CatList;
