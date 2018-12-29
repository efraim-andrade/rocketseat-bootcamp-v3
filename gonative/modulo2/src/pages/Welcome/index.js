import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="#333" />

    <Text style={styles.title}>Bem Vindo</Text>

    <Text style={styles.text}>
      Para continuar precisamos que voce informe o usuario e senha
    </Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuario"
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>
          Prosseguir
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
