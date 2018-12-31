import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const CardItem = ({ title, author, avatar }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: avatar }} />

    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>

    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Icon name="chevron-right" />
    </TouchableOpacity>
  </View>
);

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default CardItem;
