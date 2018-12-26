import React from 'react';
import PropTypes from 'prop-types';
import { Marker as Container } from 'react-map-gl';
import { Avatar } from './style';


const Marker = ({
  latitude, longitude, avatar,
}) => (
  <Container
    latitude={latitude}
    longitude={longitude}
  >
    <Avatar
      src={avatar}
      alt="avatar"
    />
  </Container>
);

Marker.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Marker;
