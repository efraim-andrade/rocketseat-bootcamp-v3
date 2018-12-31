import React from 'react';

import {
  View, TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import CardItem from '~/components/CardItem';

import styles from './styles';

class Repositories extends React.Component {
  state = {
    repoInput: '',
  }

  render() {
    const { repoInput } = this.state;

    return (
      <View style={styles.container}>
        <Header title="GitIssues" />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositorio"
            underlineColorAndroid="transparent"
            value={repoInput}
            onChangeText={text => this.setState({ repoInput: text })}
          />

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Icon style={styles.icon} name="plus" />
          </TouchableOpacity>
        </View>

        <CardItem
          title="rocketnative"
          author="RocketSeat"
          avatar="https://avatars1.githubusercontent.com/u/28229600?s=460&v=4"
        />
      </View>
    );
  }
}

export default Repositories;
