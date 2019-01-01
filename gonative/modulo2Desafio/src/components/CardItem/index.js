import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class CardItem extends React.Component {
  static propTypes = {
    internal: PropTypes.bool,
    repo: PropTypes.shape({
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    internal: false,
  }

  state = {}

  goIssues = (link = '') => {
    const { navigation, internal } = this.props;

    if (internal) {
      return navigation.navigate('Issues');
    }

    return Linking.openURL(link);
  }

  render() {
    const { repo } = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: repo.owner.avatar_url }} />

        <View style={styles.info}>
          <Text style={styles.title}>{repo.name}</Text>
          <Text style={styles.author}>{repo.owner.login}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.goIssues()}
        >
          <Icon name="chevron-right" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(CardItem);
