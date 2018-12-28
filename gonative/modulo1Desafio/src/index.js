import React from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import Post from '~/components/Post';

import colors from '~/styles/colors';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>GoNative App</Text>

    <ScrollView style={styles.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  title: {
    height: 40,

    lineHeight: 40,
    letterSpacing: -0.5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    backgroundColor: colors.white,
  },

  posts: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default App;
