import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const BackBtn = () => (
  <TouchableOpacity style={styles.back}>
    <Icon name="chevron-left" style={styles.icon} />
  </TouchableOpacity>
);

const Header = ({ title, back }) => (
  <View style={styles.container}>
    { back && <BackBtn /> }

    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
};


Header.defaultProps = {
  back: false,
};

export default Header;
