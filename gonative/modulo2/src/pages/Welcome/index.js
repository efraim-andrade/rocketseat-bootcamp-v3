import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage, ActivityIndicator,
} from 'react-native';

import api from '~/services/api';
import styles from './styles';

class Welcome extends React.Component {
  state = {
    username: '',
    loading: false,
    error: false,
  }

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  }

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  }

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (err) {
      this.setState({ loading: false, error: true });

      console.tron.log('usuario não existe');
    }
  }

  render() {
    const { username, loading, error } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#333" />

        <Text style={styles.title}>Bem Vindo</Text>

        <Text style={styles.text}>
        Para continuar precisamos que voce informe o usuario e senha
        </Text>

        { error && <Text style={styles.error}>Usuario inexistente</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuario"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.signIn}
          >
            {
              loading
                ? <ActivityIndicator size="small" color="#FFF" />
                : <Text style={styles.buttonText}> Prosseguir </Text>
            }

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
