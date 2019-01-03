import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '~/store/ducks/favorites';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar, SafeAreaView, ActivityIndicator,
} from 'react-native';

import styles from './styles';

class Main extends React.Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
    error: PropTypes.oneOfType([null, PropTypes.string]),
    loading: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  static defaultProps = {
    error: false,
  };

  static navigationOptions = {
    header: null,
  };

  state = {
    repoNameInput: '',
  }

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  }

  addRepository = () => {
    if (!this.state.repoNameInput.length) return;

    this.props.addFavoriteRequest(this.state.repoNameInput);
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
            {
              !!this.props.error && (<Text style={styles.error}>{this.props.error}</Text>)
            }

            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuario/repositorio"
              underlineColorAndroid="transparent"
              value={this.state.repoNameInput}
              onChangeText={text => this.setState({ repoNameInput: text })}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              {
                this.props.loading
                  ? <ActivityIndicator size="small" color={styles.loading} />
                  : <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
              }
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus Favoritos ({this.props.favoritesCount})</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
  error: state.favorites.errorOnAdd,
  loading: state.favorites.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
