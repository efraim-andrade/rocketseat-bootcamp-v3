import React from 'react';
import api from '~/services/api';

import {
  View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import CardItem from '~/components/CardItem';

import styles from './styles';

class Repositories extends React.Component {
  state = {
    repoInput: '',
    data: [],
    refreshing: false,
    loading: false,
  }

  searchRepo = async () => {
    this.setState({ refreshing: true });

    const { repoInput } = this.state;

    const { data } = await api.get(`/repos/${repoInput}`);

    const storage = await AsyncStorage.getItem('@Repositories:itemz');

    const item = {
      id: data.id,
      name: data.name,
      organization: data.organization.login,
      avatar: data.organization.avatar_url,
    };

    const newStorage = JSON.parse(storage);

    const asyncStorageItems = newStorage.push(item);

    console.tron.log(asyncStorageItems);

    AsyncStorage.setItem('@Repositories:itemz', JSON.stringify(asyncStorageItems));

    this.setState({
      data: [data], repoInput: '', refreshing: false, loading: false,
    });
  }

  renderItems = ({ item }) => (
    <CardItem
      internal
      avatar={item.organization.avatar_url}
      name={item.name}
      author={item.organization.login}
    />
  )

  renderListItems = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItems}
        onRefresh={this.searchRepo}
        refreshing={refreshing}
      />
    );
  }

  render() {
    const { repoInput, loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Repositories" />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="organizacao/repositorio"
            underlineColorAndroid="transparent"
            value={repoInput}
            onChangeText={text => this.setState({ repoInput: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.searchRepo}>
            <Icon style={styles.icon} name="plus" />
          </TouchableOpacity>
        </View>

        {
          loading
            ? <ActivityIndicator />
            : this.renderListItems()
        }

      </View>
    );
  }
}

export default Repositories;
