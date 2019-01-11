import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <span>PLAYLISTS</span>
        </li>

        <li>
          <a href="">Navegar</a>
        </li>

        <li>
          <a href="">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>

        <li>
          <a href="">Seus Daily Mix</a>
        </li>

        <li>
          <a href="">Tocado recentemente</a>
        </li>

        <li>
          <a href="">Músicas</a>
        </li>

        <li>
          <a href="">Álbuns</a>
        </li>

        <li>
          <a href="">Artistas</a>
        </li>

        <li>
          <a href="">Estações</a>
        </li>

        <li>
          <a href="">Arquivos locais</a>
        </li>

        <li>
          <a href="">Estações</a>
        </li>

        <li>
          <a href="">Vídeos</a>
        </li>

        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>
    </div>

    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar playlist" />

      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
