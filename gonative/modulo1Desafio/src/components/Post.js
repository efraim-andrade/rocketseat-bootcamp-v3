import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '~/styles/colors';

const Post = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Aprendendo React Native</Text>
      <Text style={styles.author}>Efraim Andrade</Text>
    </View>

    <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat et metus sit amet lobortis. Donec et libero non mauris condimentum venenatis. Sed vel lectus non odio aliquam cursus. Nunc lacus leo, pulvinar non suscipit suscipit, tempor in lorem.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 3,

    backgroundColor: colors.white,
  },

  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.whiteGrey,
  },

  title: {
    fontSize: 12,
    color: colors.black,
    fontWeight: 'bold',
  },

  author: {
    fontSize: 10,
    color: colors.grey,
  },

  text: {
    paddingTop: 8,
    lineHeight: 16,
    fontSize: 10,
    color: colors.blackGrey,
  },
});

export default Post;
