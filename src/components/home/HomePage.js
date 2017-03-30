import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>You Tube</h1>
        <p>VIDEO PLATFORM</p>
        <Link to="login" className="btn btn-primary btn-lg">Log In</Link>
      </div>
    );
  }
}

export default HomePage;
