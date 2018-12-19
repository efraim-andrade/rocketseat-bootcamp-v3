import React from 'react';
import axios from 'axios';

import api from '../services/api';

import Header from '../components/Header';
import Post from '../components/Post';

class Home extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    fetch(`http://${api.base}/posts`)
      .then(posts => posts.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;

    return (
      <React.Fragment>
        <Header />

        {
          posts.map(item => (
            <Post
              avatar={item.avatar}
              name={item.name}
              text={item.text}
              time={item.time}
            />
          ))
        }
      </React.Fragment>
    );
  }
}

export default Home;
