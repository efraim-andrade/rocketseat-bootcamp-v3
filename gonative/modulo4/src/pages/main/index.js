import React from 'react';

import { View, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
  </View>
);

main.navigationOptions = ({ navigation }) => ({
  title: 'Sua Biblioteca',
  headerRight: (
    <TouchableOpacity
      style={styles.headerRight}
      onPress={() => navigation.navigate('Search')}
    >
      <Icon name="search" size={24} color="#FFF" />
    </TouchableOpacity>
  ),
});

export default main;
