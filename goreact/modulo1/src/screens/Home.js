import React from 'react';

import Header from '../components/Header';
import Post from '../components/Post';

class Home extends React.Component {
  state = {
    posts: [
      {
        avatar: 'https://i.imgur.com/IwDMTYd.jpg',
        name: 'Suicide Girl',
        time: '3 min',
        text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
      },
      {
        avatar: 'https://i.imgur.com/IwDMTYd.jpg',
        name: 'Suicide Girl',
        time: '3 min',
        text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
      },
    ],
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
              time={item.time}
              text={item.text}
            />
          ))
        }
      </React.Fragment>
    );
  }
}

export default Home;
