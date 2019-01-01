import React from 'react';
import api from '~/services/api';

import {
  View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, AsyncStorage, Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import CardItem from '~/components/CardItem';

import styles from './styles';

class Repositories extends React.Component {
  state = {
    repoInput: '',
    data: [],
    refreshing: true,
    loading: false,
    error: false,
  }

  componentDidMount() {
    this.loadRepos();
  }

  loadRepos = async () => {
    this.setState({ refreshing: true });

    const repos = await AsyncStorage.getItem('@Githuber:repos');

    this.setState({
      data: JSON.parse(repos),
      refreshing: false,
      loading: false,
    });
  }

  searchRepo = async () => {
    this.setState({ refreshing: true });

    try {
      const { repoInput } = this.state;

      const { data } = await api.get(`/repos/${repoInput}`);

      const repos = await AsyncStorage.getItem('@Githuber:repos');

      const repoStorage = repos === null ? [] : JSON.parse(repos);

      const newRepo = {
        id: data.id,
        name: data.name,
        organization: data.organization.login,
        avatar: data.organization.avatar_url,
      };

      repoStorage.push(newRepo);

      await AsyncStorage.setItem('@Githuber:repos', JSON.stringify(repoStorage));

      this.setState({ data: repoStorage, error: false });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({
        repoInput: '', refreshing: false, loading: false,
      });
    }
  }

  renderItems = ({ item }) => (
    <CardItem
      internal
      id={item.id}
      avatar={item.avatar}
      name={item.name}
      author={item.organization}
    />
  )

  renderListItems = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItems}
        onRefresh={this.loadRepos}
        refreshing={refreshing}
      />
    );
  }

  render() {
    const { repoInput, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Repositories" />

        { error && <Text style={styles.error}>Erro ao buscar repositorio</Text> }

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
