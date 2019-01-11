import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

console.tron.log('teste');

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="Playlist" />

        <strong>Rock dos bons</strong>

        <p>Relaxe enquanto voce programa ouvindo as melhores do rock mundial!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="Playlist" />

        <strong>Rock dos bons</strong>

        <p>Relaxe enquanto voce programa ouvindo as melhores do rock mundial!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="Playlist" />

        <strong>Rock dos bons</strong>

        <p>Relaxe enquanto voce programa ouvindo as melhores do rock mundial!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="Playlist" />

        <strong>Rock dos bons</strong>

        <p>Relaxe enquanto voce programa ouvindo as melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
