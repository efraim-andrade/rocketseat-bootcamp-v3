import React from 'react';
import PropTypes from 'prop-types';
import MapGL from 'react-map-gl';
import { connect } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';

import Modal from '../Modal';

class Map extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
  }

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },

    markers: [],

    showModal: false,

    clickLatitude: '',
    clickLongitude: '',
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;

    this.setState({
      ...this.state,
      clickLatitude: latitude,
      clickLongitude: longitude,
    });

    this.openModal();
  }

  openModal = () => {
    this.setState({
      ...this.state,
      showModal: true,
    });
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Modal
          show={this.state.showModal}
          closeModal={this.closeModal}
          latitude={this.state.clickLatitude}
          longitude={this.state.clickLongitude}
        />

        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Map);
