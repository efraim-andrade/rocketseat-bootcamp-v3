import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

import '~/config/Devtools';
import '~/config/Reactotron';

import Routes from '~/routes';

export default class App extends Component {
  state = {}

  render() {
    return (
      <Routes />
    );
  }
}
