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
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    link: PropTypes.string,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    internal: false,
    link: '',
  }

  state = {}

  goIssues = (link = '') => {
    const { navigation, internal } = this.props;

    if (internal) {
      return navigation.navigate('Issues', {
        id: this.props.id,
      });
    }

    return Linking.openURL(link);
  }

  render() {
    const {
      avatar, name, author, link,
    } = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: avatar }} />

        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>{name}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.goIssues(link)}
        >
          <Icon name="chevron-right" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(CardItem);
