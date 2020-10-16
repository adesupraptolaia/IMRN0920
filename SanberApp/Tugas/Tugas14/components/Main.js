import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, StatusBar, Keyboard } from 'react-native';

import Note from './Note';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteArray: [],
      noteText: "",
    }
  }

  addNote = () => {
    if (this.state.noteText) {
      let date = new Date()
      let month = date.getMonth().length === 2 ? date.getMonth() : "0" + date.getMonth()
      let day = date.getDay().length === 2 ? date.getDay() : "0" + date.getDay()
  
      let newNote = {
        date : date.getFullYear() + "/" + month + "/" + day,
        note: this.state.noteText
      }
  
      this.state.noteArray.push(newNote)
  
      this.setState({
        noteArray: this.state.noteArray,
        noteText: "",
      })

      Keyboard.dismiss()
    }
  }

  deleteMethod = (key) => {
    this.state.noteArray.splice(key, 1)
    this.setState({noteArray: this.state.noteArray})
  }

 render() {
   let notes = this.state.noteArray.map((val, key) => {
      return(
        <Note key={key} keyval={key} val={val} deleteMethod={()=>this.deleteMethod(key)} />
      )
    })

   return (
     <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerText}>- Noter -</Text>
       </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText)=>this.setState({noteText})}
            value={this.state.noteText}
            placeholder=">note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          >
          </TextInput>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
     </View>
   )
 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

