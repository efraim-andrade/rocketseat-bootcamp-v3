import React from 'react';
import api from '~/services/api';

import {
  View, TextInput, TouchableOpacity, FlatList, ActivityIndicator,
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

    this.setState({
      data: [data], repoInput: '', refreshing: false, loading: false,
    });
  }

  renderItems = ({ item }) => <CardItem internal repo={item} />

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
