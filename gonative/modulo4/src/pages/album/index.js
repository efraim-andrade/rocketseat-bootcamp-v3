import React from 'react';

import { View, Text, ImageBackground } from 'react-native';

import SongItem from '~/components/SongItem';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';


const Album = ({ navigation }) => {
  const { album } = navigation.state.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: album.thumbnail }}
        blurRadius={2}
      >
        <View style={styles.thumbnailContent}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.author}>{album.author}</Text>
        </View>
      </ImageBackground>

      <FlatList
        data={album.songs}
        keyExtractor={songs => String(songs.id)}
        renderItem={({ item }) => <SongItem song={item} />}
      />
    </View>
  );
};

Album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title,
});

export default Album;
