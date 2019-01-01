import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  View, FlatList, ActivityIndicator, TouchableOpacity, Text,
} from 'react-native';

import Header from '~/components/Header';
import CardItem from '~/components/CardItem';

import styles from './styles';

class Issues extends Component {
    static propTypes = {
      navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
      }).isRequired,
    }

    state= {
      data: [],
      loading: true,
      refreshing: false,
    }

    componentDidMount() {
      this.loadIssues();
    }

    loadIssues = async () => {
      const repoId = await this.props.navigation.getParam('id');

      const { data } = await api.get(`/repositories/${repoId}/issues`);

      this.setState({ data, loading: false });
    }

    renderItems = ({ item }) => (
      <CardItem
        avatar={item.user.avatar_url}
        name={item.title}
        author={item.user.login}
        link={item.html_url}
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
      const { loading } = this.state;

      return (
        <View style={styles.container}>
          <Header title="Issues" />

          <View style={styles.filter}>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.text}>Todas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Text style={styles.text}>Abertas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Text style={styles.text}>Fechadas</Text>
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

export default Issues;
