import React, { Component } from 'react';
import {
  StyleSheet, View, Button,
} from 'react-native';

import Todo from '~/components/Todo';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, text: 'fazer cafe' },
      { id: 2, text: 'estudar gonodea' },
    ],
  }

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: 'new todo' },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {
        this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))
        }

        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

// Styles Tips:
/**
    *  transform: [ { rotateZ: '20deg' } ]
    *  marginHorizontal: 20
    *  marginVertical: 20
    */
