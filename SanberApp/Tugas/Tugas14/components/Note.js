import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Note extends React.Component {
  render(){
    return(
      <View style={styles.note} key={this.props.keyval}>

          <Text style={styles.noteText}>
            {this.props.val.date}
          </Text>
          <Text style={styles.noteText}>
            {this.props.val.note}
          </Text>

          <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteMethod}>
            <Text style={styles.noteDeleteText}>D</Text>
          </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#e91e63',
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: 'white',
  }
});

