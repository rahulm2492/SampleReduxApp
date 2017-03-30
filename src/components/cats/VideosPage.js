import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CatList from './CatList';
import * as actions from '../../actions/catActions'

class VideosPage extends React.Component {
  componentWillMount() {
      this.props.actions.loadCats();
  }
  render() {
    const videos = this.props.videos;
    return (
      <div className="col-md-12">
        <h1>Videos <Link to={'/videos/new'} className="btn btn-primary">VIDEOS</Link></h1>
        <div className="col-md-4">
          <CatList videos={videos} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}

VideosPage.propTypes = {
  videos: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  if (state.videos.length > 0) {
    return {
      cats: state.videos
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosPage);
