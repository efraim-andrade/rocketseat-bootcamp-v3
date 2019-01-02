import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    back: PropTypes.bool,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    back: false,
  };

  state = {}

  renderBackBtn = () => (
    <TouchableOpacity
      style={styles.back}
      onPress={() => this.props.navigation.navigate('Repositories')}
    >
      <Icon name="chevron-left" style={styles.icon} />
    </TouchableOpacity>
  );

  render() {
    const { title, back } = this.props;

    return (
      <View style={styles.container}>
        { back && this.renderBackBtn() }

        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

export default withNavigation(Header);
