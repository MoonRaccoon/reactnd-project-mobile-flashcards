import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { black, white} from "../utils/colors";
import { connect } from 'react-redux'

class CreateDeck extends Component {

  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
        <Text style={styles.prompt}>What is the title of your new deck?</Text>
        <TextInput style={styles.textbox} placeholder={"Deck title"}/>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{color: white, textAlign: 'center'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  prompt: {
    fontSize: 30,
    textAlign: 'center',
    padding: 50
  },
  textbox: {
    width: 300,
    height: 40,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10
  },
  submitBtn: {
    borderWidth: 1,
    borderRadius:10,
    backgroundColor: black,
    margin: 20,
    width: 100,
    height: 50,
    justifyContent: 'center'
  }
})

export default CreateDeck