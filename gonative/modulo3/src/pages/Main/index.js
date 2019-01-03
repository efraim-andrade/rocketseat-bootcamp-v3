import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView,
} from 'react-native';

import styles from './styles';

class Main extends React.Component {
  // static propTypes = {
  //   navigation: PropTypes.shape({
  //     navigate: PropTypes.func,
  //   }).isRequired,
  // }

  static navigationOptions = {
    header: null,
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.content}>
          <Text style={styles.title}>Gitmark</Text>

          <Text style={styles.description}>
            Comece adicionando alguns repositorios aos seus favoritos
          </Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuario/repositorio"
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {}}
              activeOpacity={0.6}
            >
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus Favoritos (3)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Main;
