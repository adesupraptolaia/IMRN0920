import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Useless Placeholder',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hallo Dunia</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({ value: text })}
          value={this.state.value}
        />
        <Text>{this.state.value}</Text>
        <AntDesign name="closecircle" size={24} color="black" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 5,
    alignSelf: "stretch"
  }
})