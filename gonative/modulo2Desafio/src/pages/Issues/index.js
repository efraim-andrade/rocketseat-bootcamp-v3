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

    async componentDidMount() {
      await this.loadIssues();

      this.setState({
        dataAll: this.state.data,
      });
    }

    loadIssues = async () => {
      const repoId = await this.props.navigation.getParam('id');

      const { data } = await api.get(`/repositories/${repoId}/issues`);

      this.setState({ data, loading: false });
    }

    filterList = (type = 'all') => {
      if (type === 'all') {
        this.setState({
          data: this.state.dataAll,
        });
      }

      if (type === 'open') {
        this.setState({
          data: this.state.dataAll.filter(item => item.state === 'open'),
        });
      }

      if (type === 'closed') {
        this.setState({
          data: this.state.dataAll.filter(item => item.state !== 'open'),
        });
      }
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
          <Header back title="Issues" />

          <View style={styles.filter}>
            <TouchableOpacity style={styles.item} onPress={() => this.filterList()}>
              <Text style={[styles.text, styles.active]}>Todas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => this.filterList('open')}>
              <Text style={styles.text}>Abertas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={() => this.filterList('closed')}>
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
